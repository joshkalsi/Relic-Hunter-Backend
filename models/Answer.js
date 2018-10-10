'use strict';

const Model = require('objection').Model;

class Answer extends Model {
  static get tableName() {
    return 'question';
  }
}

module.exports = Answer;
