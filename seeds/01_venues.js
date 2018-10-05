
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      // Inserts seed entries
      return knex('venues').insert([
        {
          name: 'Nortcoders',
          icon_url: 'https://s3.eu-west-2.amazonaws.com/relichunter-images/logoNorthcoders.png'
        },
        {
          name: 'MOSI',
          icon_url: 'https://s3.eu-west-2.amazonaws.com/relichunter-images/logoMOSI.png'
        }
      ]);
    });
};


