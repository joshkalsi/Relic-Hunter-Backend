'use strict';

const
  questsRouter = require('express').Router(),
  {
    createQuest,
    createQuestion,
    getQuests,
    getQuestsByVenueId,
    getQuestions,
    togglePublished
  } = require('../controllers/quests');

questsRouter.route('/')
  .get(getQuests);

questsRouter.route('/:venue_id')
  .get(getQuestsByVenueId)
  .post(createQuest);

questsRouter.route('/:quest_id/questions')
  .get(getQuestions)
  .post(createQuestion);

questsRouter.route('/:quest_id/publish')
  .patch(togglePublished);

module.exports = questsRouter;
