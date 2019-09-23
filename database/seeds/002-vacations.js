
exports.seed = function(knex) {
  
  // Inserts seed entries
  return knex('vacations').insert([
    {destination: 'Paradise', date: 'May, 10, 2015', description: 'wonderful', cost: 850, user_id: 1},
    {destination: 'New Jersey', date: 'May, 10, 2015', description: 'wonderful', cost: 750, user_id: 2},
    {destination: 'Palace', date: 'May, 10, 2015', description: 'wonderful', cost: 650, user_id: 3},
    {destination: 'Wyoming', date: 'May, 10, 2015', description: 'wonderful', cost: 350, user_id: 2},
    {destination: 'Canada', date: 'May, 10, 2015', description: 'wonderful', cost: 150, user_id: 1},
    {destination: 'South Africa', date: 'May, 10, 2015', description: 'wonderful', cost: 520, user_id: 2},
    {destination: 'France', date: 'Jan, 10, 2015', description: 'wonderful', cost: 850, user_id: 3},
    {destination: 'Phillippines', date: 'May, 10, 2015', description: 'wonderful', cost: 750, user_id: 2},

  ]);

};
