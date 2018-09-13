const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

// it('should return hello express response', (done) => {
//     request(app)
//         .get('/')
//         .expect('hello express !')
//         .expect(200)
//         .end(done);
// })

describe('server', ()=>{
    describe('get /', ()=>{
        it('should return hello express response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                // .expect({ error: 'page not found' })
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'page not found'
                    })
                })
                .end(done);
        })
    })

    describe('get /users', ()=>{
        it('shoud return an array of object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({ name: "Vinz", age: 37 })
                })
                .end(done);
        })
    })
})



