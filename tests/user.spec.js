const assert = require('assert');
const { expect } = require('chai');
const User = require('../models/user');

// describe('Test user model createUser() and fetchUser()', () => {
//     it('Should get user ID 12345', (done) => {
//         // id, email, password, proffesion, experience, interests, events
//         var user = new User('12345', 'abc@abc.com', 'password', 'Software Developer', 3, 'Java, Python, Ruby', '');
//         user.createUser()
//             .then(res => {
//                 User.fetchUser('abc@abc.com')
//                     .then(res => {
//                         var newUser = res[0][0];
//                         expect(newUser.id).to.equal('12345');
//                         done();
//                     })
//                     .catch(error => console.log('User not retrieved: ', error))
//             })
//             .catch(error => console.log('User not created: ', error))
//     });
// });

// describe('Test user model fetchUserById()', () => {
//     it('Should get user ID 12345', (done) => {
//         User.fetchUserById('12345')
//             .then(res => {
//                 var user = res[0][0];
//                 expect(user.email).to.equal('abc@abc.com');
//                 done();
//             })
//             .catch(error => console.log('User not created: ', error))
//     });
// });

describe('Test user model saveUser()', () => {
    it('Should get user ID 12345', (done) => {
        // id, email, password, proffesion, experience, interests, events
        var user = new User('12345', 'aaa@aaa.com', 'password', 'Software Developer', 3, 'Java, Python, Ruby', '');
        user.saveUser()
            .then(res => {
                User.fetchUserById('12345')
                    .then(res => {
                        var newUser = res[0][0];
                        expect(newUser.email).to.equal('aaa@aaa.com');
                        done();
                    })
                    .catch(error => console.log('User not retrieved: ', error))
            })
            .catch(error => console.log('User not updated: ', error))
    });
});