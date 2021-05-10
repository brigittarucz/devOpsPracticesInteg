const app = require('../app');
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

describe("GET /authenticate", () => {
    it('Should get 200', (done) => {
        chai.request(app)
            .get('/authenticate')
            .end((err, res) => {
                // console.log(res)
                res.should.have.status(200);
                done();
            })
    })
})

// https://stackoverflow.com/questions/35697763/post-request-via-chai
describe("POST /authenticate", () => {
    it('Should send parameters to /authenticate POST', function (done) {
        chai.request(app)
            .post('/authenticate')
            .send({ email: 'brigitta2@yahoo.com', password: 'password' })
            .end(function (error, response, body) {
                if (error) { done(error); }
                else { done(); }
            });
    });
})