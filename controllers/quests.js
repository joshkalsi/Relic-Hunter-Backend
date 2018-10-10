'use strict';

const
  Quest = require('../models/Quest'),
  Question = require('../models/Question');

exports.createQuest = async (req, res, next) => {
  try {
    let { venue_id } = req.params;
    venue_id = parseInt(venue_id);
    const quest = await Quest.query()
      .insert({ ...req.body, venue_id })
      .returning('*');
    res.status(201).send({ quest });
  } catch (err) {
    next(err);
  }
};

exports.createQuestion = async (req, res, next) => {
  try {
    let { quest_id } = req.params;
    quest_id = parseInt(quest_id);
    req.body.model_name = Date.now().valueOf();
    const question = await Question.query()
      .insert({ ...req.body, quest_id })
      .returning('*');
    res.status(201).send({ question });
  } catch (err) {
    next(err);
  }
};

exports.getQuests = async (req, res, next) => {
  // returns all quests without filtering
  try {
    const quests = await Quest.query();
    res.status(200).send({ quests });
  } catch (err) {
    next(err);
  }
};

exports.getQuestsByVenueId = async (req, res, next) => {
  // returns published quests for venue
  try {
    const { venue_id } = req.params;
    const quests = await Quest.query()
      .where('venue_id', '=', venue_id)
      .where('is_published', '=', true);
    res.status(200).send({ quests });
  } catch (err) {
    next(err);
  }
};

exports.getQuestions = async (req, res, next) => {
  // returns published qestions for quest
  try {
    const { quest_id } = req.params;
    const questions = await Question.query()
      .skipUndefined()
      .where('quest_id', '=', quest_id)
      .where('is_published', '=', true);
    res.status(200).send({ questions });
  } catch (err) {
    next(err);
  }
};

exports.togglePublished = async (req, res, next) => {
  try {
    const quest_id = parseInt(req.params.quest_id);
    let published = false;
    if (req.query.published === 'true') published = true;
    const quest = await Quest.query()
      .patchAndFetchById(quest_id, { is_published: published });
    res.status(200).send(quest);
  } catch (err) {
    next(err);
  }
};
/* exports.getQuestions = (req, res, next) => {
  res.status(501).send({ message: 'Not Implemented' });
};
 */
