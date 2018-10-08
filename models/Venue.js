'use strict';

const Model = require('objection').Model;

class Venue extends Model {
  static get tableName() {
    return 'venues';
  }
}

module.exports = Venue;