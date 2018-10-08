'use strict';

const
  cors = require('cors'),
  apiRouter = require('express').Router(),
  answersRouter = require('./answers'),
  questsRouter = require('./quests'),
  { createReference } = require('../controllers/references');

apiRouter.use(cors());
apiRouter.options('*', cors());

apiRouter.route('/references')
  .post(createReference);

apiRouter.use('/answers', answersRouter);
apiRouter.use('/quests', questsRouter);

module.exports = apiRouter;
