const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findMessages,
    findMessagesById,
    findBy,
    findById,
    add,
    addMessages
}

function find() {
    return db('users as u')
    .join('vacations as v', 'v.user_id', 'u.id')
    .select('u.username', 'v.id', 'v.destination', 'v.description', 'v.start_date', 'v.end_date', 'v.cost', 'v.activities', 'v.user_id')
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(id) {
    return db('users').where({id}).first();
}

function add(userData) {
    return db('users').insert(userData)
    .then(ids => {
        return findById(ids[0]);
    })
}

function findMessages() {
    return db('messages')
}

function addMessages(messageData) {
    return db('messages')
    .insert(messageData)
    
}

function findMessagesById(id) {
    return db('messages')
    .where({id})
    .first();
}
