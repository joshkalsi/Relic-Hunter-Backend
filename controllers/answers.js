'use strict';

const { imageUpload, imageCheck } = require('../api/api');

exports.createAnswer = (req, res, next) => {
  const data = req.body.answer.image;
  const modelName = req.body.answer.model_name;
  const questionID = req.params.question_id;
  imageUpload(data)
    .then(({ uploadData, url }) => {
      imageCheck(url, modelName)
        .then((checkData) => {
          const value = checkData.outputs[0].data.concepts[0].value;
          let isCorrect = false;
          if (value > 0.75) isCorrect = true;
          res.status(200).send({ answer: { answer_id: { isCorrect } } });
        })
        .catch(err => next(err));
    });
};
