
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').truncate()
  .then(function () {
   
      // Inserts seed entries
      return knex('comments').insert([
        {comment: 'What a blast', vacations_id: 2},
        {comment: 'Going back next year', vacations_id: 1},
        {comment: 'Best trip ever', vacations_id: 3}
      ]);
  })
    }
