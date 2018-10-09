'use strict';

const referencesRouter = require('express').Router();
const { trainModelFromUrls, uploadReference, testModel } = require('../controllers/references');

referencesRouter.route('/:question_id')
  .post(uploadReference);

referencesRouter.route('/:question_id/train')
  .get(trainModelFromUrls);

referencesRouter.route('/:question_id/test')
  .post(testModel);

module.exports = referencesRouter;
