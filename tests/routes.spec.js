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

// describe("POST /authenticate", () => {
//     it('Should send parameters to /authenticate POST', function (done) {
//         chai.request(app)
//             .post(path)
//             .field('email', 'password')
//             // .set('content-type', 'application/x-www-form-urlencoded')
//             .send({ email: 'brigitta2@yahoo.com', password: 'password' })
//             // .end(function (error, response, body) {
//             //     if (error) {
//             //         done(error);
//             //     } else {
//             //         done();
//             //     }
//             // });
//             .end((err, res) => {
//                 // console.log(res)
//                 res.should.have.status(200);
//                 done();
//             })
//     });
// })