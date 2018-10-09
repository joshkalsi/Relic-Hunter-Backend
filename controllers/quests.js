'use strict';

const
  { transaction } = require('objection'),
  Quest = require('../models/Quest'),
  Question = require('../models/Question');

const errorHandler = require('./errorHandler');

exports.createQuest = async (req, res, next) => {
  res.status(501).send({ message: 'Not Implemented' });
}

exports.createQuestion = async (req, res, next) => {
  res.status(501).send({ message: 'Not Implemented' });
}

exports.getQuests = async (req, res, next) => {
  const quests = await Quest.query()
    .skipUndefined()
  // need to look up how to handle errors here
  res.status(200).send({ quests });
};


exports.getQuestsByVenueId = async (req, res, next) => {
  const { venue_id } = req.params;
  const quests = await Quest.query()
    .where('venue_id', '=', venue_id)

  // test error handling

/*   if (quests.length === 0) {
    console.log('no quests');
    throw createStatusCodeError(404);
  } */

  res.status(200).send({ quests });
};


exports.getQuestions = async (req, res, next) => {
  const { quest_id } = req.params;
  const questions = await Question.query()
    .skipUndefined()
    .where('quest_id', '=', quest_id)
  // need to look up how to handle errors here
  res.status(200).send({ questions });
};

/* exports.getQuestions = (req, res, next) => {
  res.status(501).send({ message: 'Not Implemented' });
};
 */



// The error returned by this function is handled in the error handler middleware in app.js.
function createStatusCodeError(statusCode) {
  return Object.assign(new Error(), {
    statusCode
  });
}