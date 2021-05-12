const User = require('../models/user');
const dbMaria = require('./db_test');
const { expect } = require('chai');
const uuid = require('uuid');

describe('Database core methods', () => {
    describe('User handling', () => {
        it('Fetching a user by email', (done) => {
            User.fetchUser('myemail@yahoo.com', dbMaria).then(result => {
                var user = result[0][0];
                expect(user.id).to.equal('1');
                done();
            }).catch(error => {
                console.log(error);
                done();
            })
        })
        it('Creating a new user through model', (done) => {
            const user = new User(uuid.v4(), uuid.v4(), 'insecure', 'JS Developer', 5, 'Vue, NodeJS', '');

            user.createUser(dbMaria).then(result => {
                var server = result[0].serverStatus;
                expect(server).to.equal(2);
                done();
            }).catch(error => {
                console.log(error);
                done();
            })
        })
    })
})

// "test": "nyc mocha --reporter spec",
// "test": "nyc --reporter=html --reporter=text --check-coverage=true mocha",