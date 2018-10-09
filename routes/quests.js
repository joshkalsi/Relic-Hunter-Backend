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
  .post(createQuest);

questsRouter.route('/:quest_id/questions')
  .get(getQuestions)
  .post(createQuestion);

module.exports = questsRouter;
