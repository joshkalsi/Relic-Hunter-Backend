'use strict';

const Model = require('objection').Model;
const path = require('path');

class Quest extends Model {
  static get tableName() {
    return 'quests';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['full_text', 'intro_text', 'title', 'venue_id'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 3, maxLength: 255 },
        intro_text: { type: 'string', minLength: 3, maxLength: 255 },
        full_text: { type: 'string', minLength: 3, maxLength: 3000 },
        icon_url: { type: 'string', minLength: 11, maxLength: 2083 },
        background_url: { type: 'string', minLength: 11, maxLength: 2083 },
        suitability: { type: 'string', minLength: 3, maxLength: 255 },
        venue_id: { type: 'integer' },
        venue_area: { type: 'string', minLength: 3, maxLength: 255 }
      }
    };
  }

  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Venue'),
        join: {
          from: 'quests.venue_id',
          to: 'venues.id'
        }
      }
    };
  }
}

module.exports = Quest;
