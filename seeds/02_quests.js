
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('quests').del()
    .then(function () {
      // Inserts seed entries
      return knex('quests').insert([
        {
          venue_id: 1,
          title: 'Fuzzy Animals',
          intro_text: 'A demo with stuffed toys',
          full_text: 'Discover your furry friends in the lecture theatre',
          icon_url: '',
          background_url: '',
          suitability: 'For 8-10 year olds',
          venue_area: 'Lecture Hall',
          is_published: true
        },
        {
          venue_id: 1,
          title: 'Objects at Northcoders',
          intro_text: 'Find objects at Northcoders',
          full_text: 'Explore the third floor and find these exciting things...',
          icon_url: 'https://s3.eu-west-2.amazonaws.com/relichunter-images/questNcObjects.png',
          background_url: '',
          suitability: 'For 18-45 year old geeks',
          venue_area: 'Third Floor',
          is_published: true
        },
        {
          venue_id: 2,
          title: 'Science of the Ages',
          intro_text: 'Explore the science of the industrial revolution',
          full_text: 'An intriguing hunt through the science of the industrial revolution and first computers',
          icon_url: 'https://s3.eu-west-2.amazonaws.com/relichunter-images/questMosiScience.png',
          background_url: 'https://',
          suitability: 'For 8-10 year olds',
          venue_area: 'Industrial Revolution',
          is_published: true
        }
      ]);
    });
};
