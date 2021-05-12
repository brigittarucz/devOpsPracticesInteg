const app = require('../app');
const chai = require("chai");
const { expect } = require('chai');
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

var USER_ID = '265335fa-5c4a-42af-b5af-aac83d4f9a57';

describe("Business logic", function() {
    // Check for 404
    describe("Checks page flow without authentication", function() {
        it("GET /dashboard", (done) => {
            localStorage.removeItem('sessionId');

            chai.request(app)
                .get('/dashboard')
                .end((err, res) => {
                    path = res.header.path;
                    // res.should.have.status(200);
                    expect(path).to.equal('/authenticate');
                    done();
                })
        })
        it("GET /profile", (done) => {
            localStorage.removeItem('sessionId');

            chai.request(app)
                .get('/profile')
                .end((err, res) => {
                    path = res.header.path;
                    // res.should.have.status(200);
                    expect(path).to.equal('/authenticate');
                    done();
                })
        })
    })
    describe("Checks page flow with authentication", function() {
        it("GET /dashboard", (done) => {
            localStorage.setItem('sessionId', USER_ID);

            chai.request(app)
                .get('/dashboard')
                .end((err, res) => {
                    path = res.header.path;
                    expect(path).to.equal('/dashboard');
                    done();
                })
        })
        it("GET /profile", (done) => {
            localStorage.setItem('sessionId', USER_ID);

            chai.request(app)
                .get('/profile')
                .end((err, res) => {

                    path = res.header.path;
                    expect(path).to.equal('/profile');
                    done();
                })
        })
    })
    describe("Checks 404 with incorrect route", function() {
        it("GET /incorrect", (done) => {
            localStorage.setItem('sessionId', USER_ID);

            chai.request(app)
                .get('/incorrect')
                .end((err, res) => {

                    res.should.have.status(404);
                    done();
                })
        })
    })
})