const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    add
}

function find() {
    return db('vacations as v')
    .join('users as u', 'u.id', 'v.user_id' )
    .select('u.username', 'v.destination' )


}

function findBy(filter) {
    return db('vacations').where(filter)
}

function findById(id) {
    return db('vacations').where({id}).first();
}

function add(vacationData) {
    return db('vacations')
    .insert(vacationData)
    .then(ids => ({ id: ids[0] }));

    
}