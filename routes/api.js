'use strict';

const
  cors = require('cors'),
  apiRouter = require('express').Router(),
  answersRouter = require('./answers'),
  questsRouter = require('./quests');

apiRouter.use(cors());
apiRouter.options('*', cors());

apiRouter.use('/answers', answersRouter);
apiRouter.use('/quests', questsRouter);

module.exports = apiRouter;
