
exports.seed = function(knex, Promise) {
  return knex('users').truncate()
  .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'jamison', password: 'blackwell'},
        {username: 'john', password: 'doe'},
        {username: 'jane', password: 'doe'},
        {username: 'Rob', password: 'doe'},
        {username: 'Duane', password: 'doe'},

      ]);
  })
};
