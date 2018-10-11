
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          quest_id: 1,
          model_name: 'spot',
          title: 'A New Best Friend',
          text: 'Find an animal that likes to play fetch',
          hint_text: "He's black and white",
          answer_text: 'Spot the dog',
          is_published: true
        },
        {
          quest_id: 1,
          model_name: 'fay',
          title: 'A Member of the Pack',
          text: 'Find an animal who explores at night',
          hint_text: "She has orange fur",
          answer_text: 'Fay the fox',
          is_published: true
        },
        {
          quest_id: 1,
          model_name: 'george',
          title: '95% Human',
          text: 'Find an animal who lives in the jungle',
          hint_text: "He likes bananas",
          answer_text: 'George the gorilla',
          is_published: true
        },
        {
          quest_id: 2,
          model_name: 'watercooler',
          title: 'Feeling thirsty',
          text: 'Find a way to quench your thirst',
          hint_text: 'The first one you see on entering the floor',
          answer_text: 'the watercooler',
          is_published: true
        },
        {
          quest_id: 2,
          model_name: 'fireextinguisher',
          title: 'Is it hot in here?',
          text: "Something in the kitchen is burning, you'll need this item to put it out",
          hint_text: "It's bright red",
          answer_text: 'the fire extinguisher',
          is_published: true
        },
        {
          quest_id: 2,
          model_name: 'bikes',
          title: "You're so hipster",
          text: 'Find a mode of travel which allows you to dry your beard whilst getting to work',
          hint_text: 'Under the Northcoders heart',
          answer_text: 'the bikes',
          is_published: true
        },
        {
          quest_id: 3,
          model_name: 'steam-wheel',
          title: 'Steam Engines',
          text: 'Find the largest steam driven wheel',
          hint_text: 'Look for the Firgrove Mill steam engine',
          answer_text: 'the wheel',
          is_published: true
        }
      ]);
    });
};
