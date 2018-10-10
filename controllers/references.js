'use strict';

const { addConcept, createAndTrainModel, imageUpload, imageCheck } = require('../api/api');
const ReferenceImage = require('../models/ReferenceImage');
const Question = require('../models/Question');

exports.trainModelFromUrls = (req, res, next) => {
  const question_id = parseInt(req.params.question_id);
  // Query reference images for question id
  ReferenceImage.query()
    .select('url', 'model_name')
    .join('questions', 'references.question_id', 'questions.id')
    .where({ question_id: question_id })
    .then(references => {
      if (references.length < 10) {
        res.status(400).send({ message: `Not enough pictures to train - need ${10 - references.length} more` });
      } else {
        const urls = references.map(reference => reference.url);
        const model_name = references[0].model_name;
        addConcept(urls, model_name)
          .then(() => {
            createAndTrainModel(model_name)
              .then(() => {
                res.status(200).send({ message: 'Model trained' });
              });
          })
          .catch(err => {
            console.log(err);
            next(err);
          });
      }
    });
};

exports.uploadReference = (req, res, next) => {
  const data = req.body.answer.image;
  const name = 'reference' + Date.now();
  let { question_id } = req.params;
  question_id = parseInt(question_id);
  imageUpload(data, name, 'rh-question-images')
    .then(({ url }) => {
      // Store URL in database
      ReferenceImage.query()
        .insert({ url, question_id })
        .returning('*')
        .then(image => {
          res.status(201).send({ image });
        });
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

exports.testModel = (req, res, next) => {
  const data = req.body.answer.image;
  const question_id = parseInt(req.params.question_id);
  Question.query()
    .select('model_name')
    .where({ id: question_id })
    .then(result => {
      const { model_name } = result[0];
      imageUpload(data)
        .then(({ uploadData, url }) => {
          imageCheck(url, model_name)
            .then((checkData) => {
              const value = checkData.outputs[0].data.concepts[0].value;
              let isCorrect = false;
              if (value > 0.75) isCorrect = true;
              Question.query()
                .patchAndFetchById(question_id, { is_published: isCorrect })
                .then((question) => {
                  console.log(question);
                  if (isCorrect) res.status(200).send(question);
                  else res.status(400).send({ message: 'Test failed' });
                })
                .catch(err => next(err));
            });
        });
    });
};
