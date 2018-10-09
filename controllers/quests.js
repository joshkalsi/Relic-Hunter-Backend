'use strict';

const
  { transaction } = require('objection'),
  Quest = require('../models/Quest'),
  Question = require('../models/Question');

exports.createQuest = async (req, res, next) => {
  const { venue_id } = req.params;
  const newQuest = { ...req.body.newQuest, venue_id };
  const insertedNewQuest = await Quest.query()
    .insert(newQuest);
  res.status(201).send({ message: 'Quest Added', quest: insertedNewQuest });
};

exports.createQuestion = async (req, res, next) => {
  const { quest_id } = req.params;
  const { model_name, title, text, hint_text, answer_text } = req.body.newQuestion;
  const newQuestion = { model_name, title, text, hint_text, answer_text, quest_id };
  const insertedNewQuestion = await Question.query()
    .insert(newQuestion);
  res.status(201).send({ message: 'Question Added', question: insertedNewQuestion });
};

exports.getQuests = async (req, res, next) => {
  const quests = await Quest.query()
    .skipUndefined();
  // need to look up how to handle errors here
  res.status(200).send({ quests });
};

exports.getQuestsByVenueId = async (req, res, next) => {
  const { venue_id } = req.params;
  const quests = await Quest.query()
    .where('venue_id', '=', venue_id);

  // test error handling
  res.status(200).send({ quests });
};

exports.getQuestions = async (req, res, next) => {
  const { quest_id } = req.params;
  const questions = await Question.query()
    .skipUndefined()
    .where('quest_id', '=', quest_id);
  // need to look up how to handle errors here
  res.status(200).send({ questions });
};

/* exports.getQuestions = (req, res, next) => {
  res.status(501).send({ message: 'Not Implemented' });
};
 */

