'use strict';

const
  questsRouter = require('express').Router(),
  {
    createQuest,
    createQuestion,
    getQuests,
    getQuestsByVenueId,
    getQuestions
  } = require('../controllers/quests');

questsRouter.route('/')
  .get(getQuests);

questsRouter.route('/:venue_id')
  .get(getQuestsByVenueId)
  .put(createQuest);

questsRouter.route('/:quest_id/questions')
  .get(getQuestions)
  .put(createQuestion);

module.exports = questsRouter;
