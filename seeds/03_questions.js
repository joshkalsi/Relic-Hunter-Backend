
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          quest_id: 1,
          title: 'Feeling thirsty',
          text: 'Find a way to quench your thirst',
          hint_text: 'This first one you see on entering',
          answer_text: 'the watercooler'
        },
        {
          quest_id: 1,
          title: 'Is it hot in here?',
          text: "Something in the kitchen is burning, you'll need this item to put it out",
          hint_text: "It's bright red",
          answer_text: 'the fire extinguisher'
        },
        {
          quest_id: 1,
          title: "You're so hipster",
          text: "Find a mode of travel which allows you to dry your beard whilst getting to work",
          hint_text: "It's bright red",
          answer_text: 'Under the Northcoders heart'
        },
        {
          quest_id: 2,
          title: 'Steam Enines',
          text: 'Find the largest steam driven wheel',
          hint_text: 'Look for the Firgrove Mill steam engine',
          answer_text: 'the wheel'
        }
      ]);
    });
};

