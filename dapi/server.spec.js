const request = require('supertest');

const server = require('./server.js'); 


describe('server.js', () => {
    describe('GET /', () => {
        it('returns 200 OK', () => {
          return request(server)
                .get('/')
                .then(res => {

                    expect(res.status).toBe(200);
                });
        });
    });



    describe('POST /api/users/register', () => {
        it('should insert user into db', () => {
            return request(server)
            .post('/api/users/register')
            .send({  
            username: 'ncrfk',
            password: 'cool'
        })
        .then(res => {
            expect(res.status).toBe(201);
        });
        });
    });
 describe('POST /api/users/messages', () => {
        it('should insert message into db', () => {
            return request(server)
            .post('/api/users/messages')
            .send({  
            message: "what you doing",
            user_id: 1,
            posted_id: 3
        })
        .then(res => {
            expect(res.status).toBe(201);
        });
        });
    });


});