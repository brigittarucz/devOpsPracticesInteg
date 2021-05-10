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
});
