const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    add,
    addComment,
    findComments
}

function find() {
    return db('vacations as v')
    .join('users as u', 'u.id', 'v.user_id' )
    .select('u.username', 'v.id', 'v.destination', 'v.description', 'v.cost', 'v.comments', 'v.user_id' )


}

function findBy(filter) {
    return db('vacations').where(filter)
}

function findById(id) {
    return db('vacations')
    .where({id})
    .first();
    
}

function add(vacationData) {
    return db('vacations as v')
    .insert(vacationData)
    .join('users as u', 'u.id', 'v.user_id')
    

    
}

function addComment(comment) {
    return db('comments').insert(comment)
    

    
}

function findComments(vacation_id) {
    return db('comments as c')
    .join('vacations as v', 'v.id', 'c.vacations_id')
    .select('c.comment')
    .where('c.vacations_id', vacation_id)
}