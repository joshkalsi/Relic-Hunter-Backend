'use strict';

const
  // { transaction } = require('objection'),
  Quest = require('../models/Quest'),
  Question = require('../models/Question');

exports.createQuest = async (req, res, next) => {
  try {
    const { venue_id } = req.params;
    const newQuest = { ...req.body.newQuest, venue_id };
    const insertedNewQuest = await Quest.query()
      .insert(newQuest);
    res.status(201).send({ message: 'Quest Added', quest: insertedNewQuest });
  } catch (err) {
    next(err);
  }
};

exports.createQuestion = async (req, res, next) => {
  try {
    const { quest_id } = req.params;
    const { model_name, title, text, hint_text, answer_text } = req.body.newQuestion;
    const newQuestion = { model_name, title, text, hint_text, answer_text, quest_id };
    const insertedNewQuestion = await Question.query()
      .insert(newQuestion);
    res.status(201).send({ message: 'Question Added', question: insertedNewQuestion });
  } catch (err) {
    next(err);
  }
};

exports.getQuests = async (req, res, next) => {
  // returns all quests without filtering
  try {
    const quests = await Quest.query()
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
      .where('is_published', '=', true);;
    res.status(200).send({ questions });
  } catch (err) {
    next(err);
  }
};

/* exports.getQuestions = (req, res, next) => {
  res.status(501).send({ message: 'Not Implemented' });
};
 */