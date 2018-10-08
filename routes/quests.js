'use strict';

const
  questsRouter = require('express').Router(),
  {
    getQuests,
    getQuestions
  } = require('../controllers/quests');

questsRouter.route('/:venue_id')
  .get(getQuests);

questsRouter.route('/:quest_id/questions')
  .get(getQuestions);

module.exports = questsRouter;
