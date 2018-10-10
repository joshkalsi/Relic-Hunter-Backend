
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('references').del()
    .then(function () {
      // Inserts seed entries
      return knex('references').insert([
        {
          question_id: 4,
          url: 'https://s3.eu-west-2.amazonaws.com/rh-watercooler/water-cooler+(1).jpg'
        },
        {
          question_id: 4,
          url: 'https://s3.eu-west-2.amazonaws.com/rh-watercooler/water-cooler+(10).jpg'
        },
        {
          question_id: 4,
          url: 'https://s3.eu-west-2.amazonaws.com/rh-watercooler/water-cooler+(11).jpg'
        },
        {
          question_id: 4,
          url: 'https://s3.eu-west-2.amazonaws.com/rh-watercooler/water-cooler+(12).jpg'
        },
        {
          question_id: 4,
          url: 'https://s3.eu-west-2.amazonaws.com/rh-watercooler/water-cooler+(13).jpg'
        },
        {
          question_id: 4,
          url: 'https://s3.eu-west-2.amazonaws.com/rh-watercooler/water-cooler+(14).jpg'
        },
        {
          question_id: 4,
          url: 'https://s3.eu-west-2.amazonaws.com/rh-watercooler/water-cooler+(15).jpg'
        },
        {
          question_id: 4,
          url: 'https://s3.eu-west-2.amazonaws.com/rh-watercooler/water-cooler+(16).jpg'
        },
        {
          question_id: 4,
          url: 'https://s3.eu-west-2.amazonaws.com/rh-watercooler/water-cooler+(17).jpg'
        },
        {
          question_id: 4,
          url: 'https://s3.eu-west-2.amazonaws.com/rh-watercooler/water-cooler+(2).jpg'
        },
        {
          question_id: 4,
          url: 'https://s3.eu-west-2.amazonaws.com/rh-watercooler/water-cooler+(3).jpg'
        }
      ]);
    });
};
