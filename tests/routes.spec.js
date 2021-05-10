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
                console.log(res)
                res.should.have.status(200);
                done();
            })
    })
})

// describe("GET", () => {
//     it('should send parameters to : /path POST', function (done) {
//         chai
//             .request(host)
//             .post(path)
//             // .field('myparam' , 'test')
//             .set('content-type', 'application/x-www-form-urlencoded')
//             .send({ myparam: 'test' })
//             .end(function (error, response, body) {
//                 if (error) {
//                     done(error);
//                 } else {
//                     done();
//                 }
//             });
//     });
// })