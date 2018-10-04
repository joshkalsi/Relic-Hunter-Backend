'use strict';

const Model = require('objection').Model;
const Question = require('./Question');

class Answer extends Model {
  static get tableName() {
    return 'question';
  }
}

module.exports = Answer;