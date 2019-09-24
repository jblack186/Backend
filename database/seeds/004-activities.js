
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  
  return knex('activities').truncate()
  .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {activities: 'Surfing', vacations_id: 2},
        {activities: 'Chess', vacations_id: 1},
        {activities: 'Golfing', vacations_id: 3},
        {activities: 'Bowling', vacations_id: 3},
        {activities: 'Sailing', vacations_id: 2}


      ]);
  })
    }
