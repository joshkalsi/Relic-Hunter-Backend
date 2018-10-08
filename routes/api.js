'use strict';

const
  cors = require('cors'),
  apiRouter = require('express').Router(),
  answersRouter = require('./answers'),
  questsRouter = require('./quests'),
  venuesRouter = require('./venues'),
  referencesRouter = require('./references');

apiRouter.use(cors());
apiRouter.options('*', cors());

apiRouter.use('/answers', answersRouter);
apiRouter.use('/quests', questsRouter);
apiRouter.use('/venues', venuesRouter);
apiRouter.use('/references', referencesRouter);

module.exports = apiRouter;
