'use strict';

const { addConcept, createAndTrainModel } = require('../api/api');

exports.createReference = (req, res, next) => {
  const { urls } = req.body.references;
  const { questionID } = req.body.references;
  addConcept(urls, questionID)
    .then(conceptResponse => {
      createAndTrainModel(questionID)
        .then(trainResponse => {
          res.status(200).send({ information: trainResponse.modelVersion });
        });
    })
    .catch(err => console.log(err));
};
