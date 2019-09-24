const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    add,
    addComment,
    addDestination,
    addActivities,
    findComments,
    findActivities,
    findDestination
}

function find() {
    return db('vacations as v')
    .join('users as u', 'u.id', 'v.user_id' )

}

function findDestination() {
    return db('destination as d')
    .join('vacations as v', 'v.id', 'd.vacations_id')
    .select('d.destination', 'v.cost')
}

function findActivities() {
    return db('activities as a')
    .join('vacations as v', 'v.id', 'a.vacations_id')
}

function findComments() {
    return db('comments as c')
    .join('vacations as v', 'v.id', 'c.vacations_id')
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

function addDestination(destinationData) {
    return db('destination as d')
    .insert(destinationData)
}

function addActivities(activitiesData) {
    return db('activities as a')
    .insert(activitiesData)
}



function addComment(comment) {
    return db('comments')
    .insert(comment)
    

    
}

