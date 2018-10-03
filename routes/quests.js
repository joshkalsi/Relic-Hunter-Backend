'use strict';

const
  questsRouter = require('express').Router(),
  {
    getQuests,
    getQuestions
  } = require('../controllers/quests');

questsRouter.route('/:venue_id')
  .get(getQuests);

questsRouter.route('/questions/:quest_id')
  .get(getQuestions);

module.exports = questsRouter;