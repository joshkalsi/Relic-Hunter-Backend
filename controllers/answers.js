'use strict';

const { imageUpload, imageCheck } = require('../models/answers');

exports.createAnswer = (req, res, next) => {
  const data = req.body.answer.image;
  imageUpload(data)
    .then(({ uploadData, url }) => {
      imageCheck(url, 'Relic Hunter')
        .then((checkData) => {
          const value = checkData.outputs[0].data.concepts[0].value;
          let isCorrect = false;
          if (value > 0.75) isCorrect = true;
          res.status(200).send({ answer: { answer_id: { isCorrect } } });
        })
        .catch(err => next(err));
    });
};
