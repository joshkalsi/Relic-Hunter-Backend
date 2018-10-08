'use strict';

const { addConcept, createAndTrainModel } = require('../api/api');

exports.createReference = (req, res, next) => {
  const { urls } = req.body.references;
  const { questionID } = req.body.references;
  console.log(urls);
  console.log(questionID);
  addConcept(urls, questionID)
    .then(conceptResponse => {
      console.log(conceptResponse);
      createAndTrainModel(questionID)
        .then(trainResponse => {
          console.log(trainResponse);
          res.status(200).send({ trainResponse });
        })
        .catch(err => next(err));
    });
};
