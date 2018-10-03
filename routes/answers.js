'use strict';

const
  answersRouter = require('express').Router(),
  {
    createAnswer
  } = require('../controllers/answers');

answersRouter.route('/:question_id')
  .post(createAnswer);

module.exports = answersRouter;