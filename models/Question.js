'use strict';

const Model = require('objection').Model;
const Quest = require('./Quest');

class Question extends Model {
  static get tableName() {
    return 'questions';
  }
}

module.exports = Question;
