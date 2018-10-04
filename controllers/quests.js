'use strict';

const
  { transaction } = require('objection'),
  Quest = require('../models/Quest');

exports.getQuests = (req, res, next) => {
  const { venue_id } = req.params;
  const quests = await Quest.query()
    .skipUndefined()
    .where('venue_id', '=', venue_id)
    .orderBy('title');
  // need to look up how to handle errors here
  res.status(200).send({ quests });
};

exports.getQuestions = (req, res, next) => {
  res.status(501).send({ message: 'Not Implemented' });
};
