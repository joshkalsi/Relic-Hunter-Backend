
exports.up = knex => {
  return knex.schema
    .createTable('venues', table => {
      table.increments('id').primary();
      table.string('name').notNull();
      table.string('icon_url');
    })
    .createTable('quests', table => {
      table.increments('id').primary();
      table
        .integer('venue_id')
        .unsigned()
        .references('id')
        .inTable('venues')
        .onDelete('SET NULL');
      table.string('title');
      table.string('intro_text');
      table.string('full_text');
      table.string('icon_url');
      table.string('background_url');
      table.string('suitability');
      table.string('venue_area');
      table.string('is_published')
        .defaultTo(false);
    })
    .createTable('questions', table => {
      table.increments('id').primary();
      table
        .integer('quest_id')
        .unsigned()
        .references('id')
        .inTable('quests')
        .onDelete('CASCADE');
      table.string('model_name')
        .defaultTo(Date.now().valueOf());
      table.string('title');
      table.string('text');
      table.string('hint_text');
      table.string('answer_text');
      table.string('is_published')
        .defaultTo(false);
    })
    .createTable('references', table => {
      table.increments('id').primary();
      table
        .integer('question_id')
        .unsigned()
        .references('id')
        .inTable('questions')
        .onDelete('SET NULL');
      table.string('url');
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('references')
    .dropTableIfExists('questions')
    .dropTableIfExists('quests')
    .dropTableIfExists('venues');
};
