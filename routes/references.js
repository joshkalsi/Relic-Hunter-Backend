'use strict';

const referencesRouter = require('express').Router();
const { trainModelFromUrls, uploadReference } = require('../controllers/references');

referencesRouter.route('/:question_id')
  .post(uploadReference);

referencesRouter.route('/:question_id/train')
  .get(trainModelFromUrls);

module.exports = referencesRouter;
