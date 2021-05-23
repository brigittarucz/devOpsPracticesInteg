const User = require('../models/user');
const uuid = require('uuid');
const emailValidator = require('email-validator');

const db = require('../util/database');

const { LocalStorage } = require('node-localstorage');
const { fetchUser } = require('../models/user');
localStorage = new LocalStorage('./local_storage');


exports.getAuth = (req, res) => {
    return res.render('auth/authenticate', {
        pageTitle: 'Authentication',
    })
}

exports.logoutAuth = (req, res) => {
    localStorage.setItem('sessionId', '');
    return res.render('auth/authenticate', {
        pageTitle: 'Authentication',
    })
}

exports.postAuth = (req, res) => {
    console.log(req);
    
    if(req.params.action == 'login') {
        User.fetchUser(req.body.email, db).then(result => {
                var oUser = result[0];
                if(oUser.length) {
                    oUser = oUser[0];
                    if(oUser.password == req.body.password) {
                        localStorage.setItem('sessionId', oUser.id);
                        return res.redirect('/dashboard');
                    } else {
                        console.log(new Error("Invalid password"));
                        res.redirect('/authenticate');
                    }
                } else {
                    console.log(new Error("Invalid credentials"));
                    res.redirect('/authenticate');
                }
        }).catch(error => {
                console.log(new Error(error));
                res.redirect('/authenticate');
        });
        // console.log(req.body.email);
        // console.log(req.body.password);
    } 
    
    if(req.params.action == 'signup') {


        if(!emailValidator.validate(req.body.email)) {
            console.log(new Error("Invalid email"));
            res.redirect('/authenticate');
        } 

        if(!(req.body.password.length >= 8)) {
            console.log(new Error("Password length too short"));
            res.redirect('/authenticate');
        }

        if(!(req.body.password === req.body.repeatpassword)) {
            console.log(new Error("Passwords do not match"));
            res.redirect('/authenticate');
        }

        if(req.body.proffesion.length === 0) {
            console.log(new Error("Proffesion field is empty"));
            res.redirect('/authenticate');
        }

        if(req.body.experience.length === 0) {
            console.log(new Error("Experience field is empty"));
            res.redirect('/authenticate');
        }

        fetchUser(req.body.email, db).then(result => {
            if(result[0].length) {
                console.log(new Error("User already exists"));
                res.redirect('/authenticate');
            } else {
                const uniqid = uuid.v4();
                const user = new User(uniqid, req.body.email, req.body.password, req.body.proffesion, req.body.experience, req.body.interests, '');
        
                user.createUser(db).then(() => {
                    localStorage.setItem('sessionId', user.id);
                    return res.redirect('/dashboard');
                }).catch(error => {
                    console.log(error);
                    console.log(new Error("User cannot be created"));
                    res.redirect('/authenticate');
                })
            }
        })
       
    }
}

