
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('destination').truncate()
  .then(function () {
   
      // Inserts seed entries
      return knex('destination').insert([
        {destination: 'Hawaii', vacations_id: 2},
        {destination: 'Bahamas', vacations_id: 1},
        {destination: 'Miami', vacations_id: 3}
      ]);
  })
    }
