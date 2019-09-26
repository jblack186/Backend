const request = require('supertest');

const server = require('./server.js'); 


describe('server.js', () => {
    describe('GET /', () => {
        it('returns 200 OK', () => {
          return request(server)
                .get('/')
                .then(res => {

                    expect(res.status).tobe(200);
                });
        });
    });
});

describe('server.js', () => {
    describe('GET api/vacations/comments', () => {
        it('returns 200 OK', () => {
          return request(server)
                .get('api/vacations/comments')
                .then(res => {

                    expect(res.status).tobe(200);
                });
        });
    });
});

describe('server.js', () => {
describe('POST api/vacations/comments', () => {
    it('returns 201 OK', () => {
        return request(server)
            .post('api/vacations/comments')
            .then(res => {

                expect(res.status).tobe(201);
            });
    });
});
});

describe('server.js', () => {
    describe('GET /messages', () => {
        it('returns 200 OK', () => {
          return request(server)
                .get('api/users/messages')
                .then(res => {

                    expect(res.status).tobe(200);
                });
        });
    });
});


describe('server.js', () => {
    describe('POST api/users/messages', () => {
        it('returns 201 OK', () => {
            return request(server)
                .post('api/users/messages')
                .then(res => {
    
                    expect(res.status).tobe(201);
                });
        });
    });
    });

    describe('server.js', () => {
        describe('POST api/users', () => {
            it('returns 201 OK', () => {
                return request(server)
                    .post('api/users')
                    .then(res => {
        
                        expect(res.status).tobe(201);
                    });
            });
        });
        });
