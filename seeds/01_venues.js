
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      // Inserts seed entries
      return knex('venues').insert([
        {
          name: 'MOSI',
          icon_url: 'https://www.mosi.org/wp-content/uploads/2017/09/MOSI_Logo_Tag_Color2-e1506540739546.png'
        }
      ]);
    });
};


