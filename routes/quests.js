'use strict';

const
  questsRouter = require('express').Router(),
  {
    getQuests,
    getQuestsByVenueId,
    getQuestions
  } = require('../controllers/quests');

questsRouter.route('/')
  .get(getQuests);

  questsRouter.route('/:venue_id')
  .get(getQuestsByVenueId);

questsRouter.route('/:quest_id/questions')
  .get(getQuestions);

module.exports = questsRouter;
