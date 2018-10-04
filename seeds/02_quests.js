
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('quests').del()
    .then(function () {
      // Inserts seed entries
      return knex('quests').insert([
        {
          venue_id: 1,
          title: 'Science of the Ages',
          intro_text: 'Explore the science of the industrial revolution',
          full_text: 'An intriguing hunt through the science of the industrial revolution and first computers',
          icon_url: 'https://',
          background_url: 'https://',
          suitability: 'For 8-10 year olds',
          venue_area: 'Industrial Revolution'
        }
      ]);
    });
};

