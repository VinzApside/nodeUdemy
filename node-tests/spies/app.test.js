const expect = require('expect');
const rewire = require('rewire');


const app = rewire('./app');
// app.__set__ ou app.__get__

describe('App', () => {
    const db = {
        saveUser: expect.createSpy(),
    };
    app.__set__('db', db);


    it('should call the spy correctly', () => {
        let spy = expect.createSpy()
        spy('Vinz', 37);
        expect(spy).toHaveBeenCalledWith('Vinz', 37);
    });

    it('should call saveUser with user object', () => {
        const email = 'test@test.fr';
        const password = '123aze';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    })
});