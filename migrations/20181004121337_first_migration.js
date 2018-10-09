
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
        .onDelete('SET NULL');
      table.string('model_name');
      table.string('title');
      table.string('text');
      table.string('hint_text');
      table.string('answer_text');
      table.string('is_published')
        .defaultTo(false);
      table.string('is_tested')
        .defaultTo(false);
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('questions')
    .dropTableIfExists('quests')
    .dropTableIfExists('venues');
};
