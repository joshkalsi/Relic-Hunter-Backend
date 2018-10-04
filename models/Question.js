'use strict';

const Model = require('objection').Model;
const Quest = require('./Quest');

class Question extends Model {
  static get tableName() {
    return 'question';
  }
}

module.exports = Question;
