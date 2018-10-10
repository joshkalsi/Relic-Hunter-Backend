'use strict';

const { imageUpload, imageCheck } = require('../api/api');
const Question = require('../models/Question');

exports.createAnswer = (req, res, next) => {
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
              res.status(200).send({ answer: { answer_id: { isCorrect } } });
            })
            .catch(err => next(err));
        });
    });
};
