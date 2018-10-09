'use strict';

const Model = require('objection').Model;

class Venue extends Model {
  static get tableName() {
    return 'venues';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 3, maxLength: 255 },
        icon_url: { type: 'string', minLength: 11, maxLength: 2083 }
      }
    };
  }

}



module.exports = Venue;