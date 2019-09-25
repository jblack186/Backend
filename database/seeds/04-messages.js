
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').truncate()
  .then(function () {
   
      // Inserts seed entries
      return knex('messages').insert([
        {messages: 'Can you post more pictures of your vacation', user_id: 2},
        {messages: 'Fav part?', user_id: 1},
        {messages: 'Im going next week', user_id: 3}
      ]);
  })
    }