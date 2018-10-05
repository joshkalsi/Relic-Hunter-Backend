
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          quest_id: 1,
          title: 'Science of the Ages',
          text: 'Find the largest steam driven wheel',
          hint_text: 'Look for the Firgrove Mill steam engine',
          answer_text: 'the wheel'
        }
      ]);
    });
};

