
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          quest_id: 1,
          model_name: 'watercooler',
          title: 'Feeling thirsty',
          text: 'Find a way to quench your thirst',
          hint_text: 'This first one you see on entering',
          answer_text: 'the watercooler'
        },
        {
          quest_id: 1,
          model_name: 'fireextinguisher',
          title: 'Is it hot in here?',
          text: "Something in the kitchen is burning, you'll need this item to put it out",
          hint_text: "It's bright red",
          answer_text: 'the fire extinguisher'
        },
        {
          quest_id: 1,
          model_name: 'bikes',
          title: "You're so hipster",
          text: 'Find a mode of travel which allows you to dry your beard whilst getting to work',
          hint_text: 'Under the Northcoders heart',
          answer_text: 'the bikes'
        },
        {
          quest_id: 2,
          model_name: 'steam-wheel',
          title: 'Steam Engines',
          text: 'Find the largest steam driven wheel',
          hint_text: 'Look for the Firgrove Mill steam engine',
          answer_text: 'the wheel'
        }
      ]);
    });
};
