'use strict';

const referencesRouter = require('express').Router();
const { trainModelFromUrls, uploadReference } = require('../controllers/references');

referencesRouter.route('/train')
  .post(trainModelFromUrls);

referencesRouter.route('/upload')
  .post(uploadReference);

module.exports = referencesRouter;
