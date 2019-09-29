const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findMessages,
    findMessagesById,
    findBy,
    findById,
    add,
    addMessages,
    // addMessageById
}

function find() {
    return db('users')
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

// function addMessageById(message, id) {
//     const rid = req.params.id
//     return db('messages as m')
//     .where({'m.id': rid})
    
// }