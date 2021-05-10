const assert = require('assert');
const { expect } = require('chai');
const dbMaria = require('../util/database-test');

describe('Test database connection', () => {
    it('Should get user ID 1c1903d7...', (done) => {
        dbMaria.execute("SELECT * FROM users WHERE users.email = 'brigitt1a121@yahoo.com';")
            .then(res => {
                var user = res[0][0];
                // console.log(user);
                expect(user.id).to.equal('1c1903d7-e852-4578-8f39-69421a7849fa');
                done();
            })
            .catch(error => console.log(error))
    });

    it('Should get event ID 3c1246a5...', (done) => {
        dbMaria.execute("SELECT * FROM events WHERE events.title = 'Deep Dive Design Thinking Workshop';")
            .then(res => {
                var user = res[0][0];
                // console.log(user);
                expect(user.id).to.equal('3c1246a5-fee9-485d-adb3-24f029c528b4');
                done();
            })
            .catch(error => console.log(error))
    });

    // Prevent test from hanging
    // https://stackoverflow.com/questions/51046665/mocha-hangs-after-tests-have-finished
    after(() => { dbMaria.end() })
});
