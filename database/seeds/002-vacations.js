
exports.seed = function(knex, Promise) {
  return knex('vacations').truncate()
  .then(function () {
  // Inserts seed entries
  return knex('vacations').insert([
    {destination: "Hawaii", start_date: "03132017", end_date: "05102013", cost: 300, activities: "Bowling, Surfing", user_id: 3},
    {destination: "France", start_date: "05132017", end_date: "05102013", cost: 1300, activities: "Soccer, Surfing", user_id: 1},
    {destination: "Miami", start_date: "06132017", end_date: "05102013", cost: 6400, activities: "Fencing, Skiing", user_id: 2},
    {destination: "California", start_date: "02132017", end_date: "05102013", cost: 9300, activities: "Basketball, Sailing", user_id: 3},
    {destination: "Bahamas", start_date: "09132017", end_date: "05102013", cost: 3200, activities: "Picnic, Surfing", user_id: 1}

  
  ]);
  })
};
