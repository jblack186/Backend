
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
    tbl.string('destination', 256)
    .notNullable()
    tbl.string('description', 256)
    .notNullable()
    tbl.string('start_date')
    .notNullable()
    tbl.string('end_date')
    .notNullable()
    tbl.integer('cost')
    tbl.text('activities', 256)
    .notNullable()
    tbl.timestamps(true, true)
    tbl.string('img', 256)
    // foreign key is linked to id on users table
    tbl.integer('user_id' )
    .unsigned()
    .notNullable()
    .references('id').inTable('users')

   })



   .createTable('comments', tbl => {
    tbl.increments();
     tbl.text('comment', 255)
     // foreign key here is linked to vacation table
     tbl.integer('vacations_id')
     .unsigned()
     .notNullable()
     .references('id').inTable('vacations')
     
   })
  


.createTable('messages', tbl => {
  tbl.increments();
  tbl.text('message', 255)
  // foreign key here is linked to vacation table
  tbl.integer('user_id')
  .unsigned()
  .notNullable()
  .references('id').inTable('users')
  tbl.integer('posted_id')
  .unsigned()
  .notNullable()
  .references('id').inTable('users')
  
})

};
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('messages')
    .dropTableIfExists('comments')
    .dropTableIfExists('vacations')
    .dropTableIfExists('users');

};
