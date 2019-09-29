
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').truncate()
  .then(function () {
   
      // Inserts seed entries
      return knex('messages').insert([
        {message: 'Can you post more pictures of your vacation', user_id: 2,  posted_id: 3},
        {message: 'Fav part?', user_id: 1, posted_id: 2},
        {message: 'Im going next week', user_id: 3,  posted_id: 1}
      ]);
  })
    }