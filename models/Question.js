'use strict';

const Model = require('objection').Model;
const path = require('path');

class Question extends Model {
  static get tableName() {
    return 'questions';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['quest_id', 'title', 'text', 'hint_text', 'answer_text'],

      properties: {
        id: { type: 'integer' },
        quest_id: { type: 'integer' },
        model_name: { type: 'string', maxLength: 20 },
        title: { type: 'string', minLength: 3, maxLength: 255 },
        text: { type: 'string', minLength: 10, maxLength: 500 },
        hint_text: { type: 'string', minLength: 5, maxLength: 300 },
        answer_text: { type: 'string', minLength: 5, maxLength: 300 },
        is_published: { type: 'boolean' }
      }
    };
  }

  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Quest'),
        join: {
          from: 'questions.quest_id',
          to: 'quests.id'
        }
      }
    };
  }
}

module.exports = Question;
