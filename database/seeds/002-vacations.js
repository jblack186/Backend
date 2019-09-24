
exports.seed = function(knex, Promise) {
  return knex('vacations').truncate()
  .then(function () {
  // Inserts seed entries
  return knex('vacations').insert([
    {start_date: "03132017", end_date: "05102013", cost: 300, user_id: 3},
    {start_date: "05132017", end_date: "05102013", cost: 1300, user_id: 1},
    {start_date: "06132017", end_date: "05102013", cost: 6400, user_id: 2},
    {start_date: "02132017", end_date: "05102013", cost: 9300, user_id: 3},
    {start_date: "09132017", end_date: "05102013", cost: 3200, user_id: 1}

  
  ]);
  })
};
