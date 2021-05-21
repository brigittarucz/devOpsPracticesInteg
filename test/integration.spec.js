const User = require('../models/user');
const Event = require('../models/event');
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
        it('Fetching a user by id', (done) => {
            User.fetchUserById(1, dbMaria)
            .then(res => {
                var user = res[0][0];
                expect(user.email).to.equal('myemail@yahoo.com');
                done();
            })
            .catch(error => console.log('User not created: ', error))
        })
    })
    describe('Event handling', () => {
        it('Fetching all events', (done) => {
            Event.fetchEvents(dbMaria)
            .then(res => {
                var event = res[0][1];
                expect(event.id).to.equal('5d8ade45-61cb-4cde-8a64-838d4a23541e');
                done();
            })
            .catch(error => {
                console.log('Events not retrieved: ', error);
                done();
            })
        })
    })
})

describe('Database queries', () => {
    describe('User handling', () => {
        it('Retrieves user by email', (done) => {
            dbMaria.execute("SELECT * FROM users WHERE users.email = 'brigitt1a121@yahoo.com';")
            .then(res => {
                var user = res[0][0];
                expect(user.id).to.equal('1c1903d7-e852-4578-8f39-69421a7849fa');
                done();
            })
            .catch(error => {
                console.log(error)
                done();
            })
        })
    
    })
    describe('Event handling', () => {
        it('Retrieves event by title', (done) => {
            dbMaria.execute("SELECT * FROM events WHERE events.title = 'Deep Dive Design Thinking Workshop';")
            .then(res => {
                var user = res[0][0];
                expect(user.id).to.equal('3c1246a5-fee9-485d-adb3-24f029c528b4');
                done();
            })
            .catch(error => {
                console.log(error)
                done();
            })
        }
    )})
})

after(() => { dbMaria.end() })

// kill $(lsof -t -i:3000)
// "test": "nyc mocha --reporter spec",
// "test": "nyc --reporter=html --reporter=text --check-coverage=true mocha",