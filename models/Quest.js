'use strict';

const Model = require('objection').Model;
const Question = require('./Question');

class Quest extends Model {
  static get tableName() {
    return 'quests';
  }
}

module.exports = Quest;