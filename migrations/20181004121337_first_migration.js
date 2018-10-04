
exports.up = knex => {
  return knex.schema
    .createTable('venues', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('iconUrl');
      table.string('city');
    })
    .createTable('quests', table => {
      table.increments('id').primary();
      table
        .integer('venue_id')
        .unsigned()
        .references('id')
        .inTable('venue')
        .onDelete('SET NULL');
      table.string('title');
      table.string('intro_text');
      table.string('full_text');
      table.string('icon_url');
      table.string('background_url');
      table.string('suitability');
      table.string('venue_area');
    })
    .createTable('questions', table => {
      table.increments('id').primary();
      table
        .integer('question_id')
        .unsigned()
        .references('id')
        .inTable('questions')
        .onDelete('SET NULL');
      table.string('title');
      table.string('text');
      table.string('hint_text');
      table.string('answer_text');
    })

};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('questions')
    .dropTableIfExists('quests')
    .dropTableIfExists('venues');
};
