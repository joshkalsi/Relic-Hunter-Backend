'use strict';

const
  cors = require('cors'),
  apiRouter = require('express').Router(),
  answersRouter = require('./answers'),
  questsRouter = require('./quests'),
  venuesRouter = require('./venues');
  


apiRouter.use(cors());
apiRouter.options('*', cors());

apiRouter.use('/answers', answersRouter);
apiRouter.use('/quests', questsRouter);
apiRouter.use('/venues', venuesRouter);

module.exports = apiRouter;
