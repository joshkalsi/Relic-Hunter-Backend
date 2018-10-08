'use strict';

const { addConcept, createAndTrainModel, imageUpload } = require('../api/api');

exports.trainModelFromUrls = (req, res, next) => {
  const { urls } = req.body.references;
  const { questionID } = req.body.references;
  addConcept(urls, questionID)
    .then(conceptResponse => {
      createAndTrainModel(questionID)
        .then(trainResponse => {
          res.status(200).send({ information: trainResponse.modelVersion });
        });
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

exports.uploadReference = (req, res, next) => {
  const data = req.body.image;
  const name = 'reference' + Date.now();
  imageUpload(data, name, 'rh-question-images')
    .then((uploadData, url) => {
      res.status(200).send({ uploadData, url });
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};
