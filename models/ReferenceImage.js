'use strict';

const Model = require('objection').Model;

class ReferenceImage extends Model {
  static get tableName() {
    return 'references';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['question_id', 'url'],

      properties: {
        id: { type: 'integer' },
        question_id: { type: 'integer' },
        url: { type: 'string', minLength: 11, maxLength: 2083 },
      }
    };
  }

  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Question',
        join: {
          from: 'references.question_id',
          to: 'questions.id'
        }
      }
    };
  }

}

module.exports = ReferenceImage;