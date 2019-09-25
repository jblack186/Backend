const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    add,
    addComment,
    findComments,
}

function find() {
    return db('vacations as v')

}





function findComments() {
    return db('comments as c')
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
}






function addComment(comment) {
    return db('comments')
    .insert(comment)
    

    
}

