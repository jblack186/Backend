
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};

exports.seed = function(knex, Promise) {
  return knex('vacations').truncate()
  .then(function () {
  // Inserts seed entries
  return knex('vacations').insert([
    {destination: "Hawaii", description: 'Awesome', start_date: "03132017", end_date: "05102013", cost: 300, activities: "Bowling, Surfing", user_id: 3},
    {destination: "France", description: 'Awesome', start_date: "05132017", end_date: "05102013", cost: 1300, activities: "Soccer, Surfing", user_id: 1},
    {destination: "Miami", description: 'Awesome', start_date: "06132017", end_date: "05102013", cost: 6400, activities: "Fencing, Skiing", user_id: 2},
    {destination: "California", description: 'Awesome', start_date: "02132017", end_date: "05102013", cost: 9300, activities: "Basketball, Sailing", user_id: 3},
    {destination: "Bahamas", description: 'Awesome', start_date: "09132017", end_date: "05102013", cost: 3200, activities: "Picnic, Surfing", user_id: 1}

  
  ]);
  })
};
