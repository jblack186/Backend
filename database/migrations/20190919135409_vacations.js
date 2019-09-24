
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 255)
          .notNullable()
          .unique();
        tbl.string('password', 255)
        .notNullable();
      })

   .createTable('vacations', tbl => {
        tbl.increments();
        tbl.float('start_date')
        .notNullable()
        tbl.float('end_date')
        .notNullable()
        tbl.float('cost')
        tbl.timestamps(true, true)
        // foreign key is linked to id on users table
        tbl.integer('user_id' )
        .unsigned()
        .notNullable()
        .references('id').inTable('users')

   })


   .createTable('destination', tbl => {
    tbl.increments();
    tbl.string('destination', 255)
    // foreign key here is linked to vacation table
    tbl.integer('vacations_id')
    .unsigned()
    .notNullable()
    .references('id').inTable('vacations')
    
  })

  .createTable('activities', tbl => {
    tbl.increments();
    tbl.string('activities', 255)
    // foreign key here is linked to vacation table
    tbl.integer('vacations_id')
    .unsigned()
    .notNullable()
    .references('id').inTable('vacations')
    
  })

   .createTable('comments', tbl => {
     tbl.increments();
     tbl.string('comment', 255)
     // foreign key here is linked to vacation table
     tbl.integer('vacations_id')
     .unsigned()
     .notNullable()
     .references('id').inTable('vacations')
     
   })
  
};


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('comments')
    .dropTableIfExists('activities')
    .dropTableIfExists('destination')
    .dropTableIfExists('vacations')
    .dropTableIfExists('users');

};
