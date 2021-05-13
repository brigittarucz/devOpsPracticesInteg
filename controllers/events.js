const express = require('express');
const fetch = require('node-fetch');

const Event = require('../models/event');
const User = require('../models/user');

const { LocalStorage } = require('node-localstorage');
localStorage = new LocalStorage('./local_storage');

var utilities = require('../public/js/functions');
const db = require('../util/database');

exports.getEvents = async (req,res,next) => {

    if(localStorage.getItem('sessionId') == null) {
        res.setHeader('path', '/authenticate')
        return res.render('auth/authenticate', {
            pageTitle: 'Authentication',
        })
    }

    Event.fetchEvents(db).then(resp => {
        var aEvents = resp[0];
        // TODO: Exclude events added to the user's list
        
        User.fetchUserById(localStorage.getItem('sessionId')).then( user => {
            
            var user = user[0][0];

            // user.proffesion = 'Javascript Developer';

            // utilities.formatSimilarity(user, aEvents).then(res => {
            //     console.log(res);
            // })

            var aUserEvents = user.events;
            
            aUserEvents = aUserEvents.length ? JSON.parse(aUserEvents) : 0;
            
            if(aUserEvents) {
                for(let i = 0; i < aUserEvents.length; i++) {
                    for(let j = 0; j < aEvents.length; j++) {
                        if(aUserEvents[i] === aEvents[j].id) {
                            aEvents.splice(j, 1);
                            // console.log(aEvents);
                            break;
                        }
                    }
                }
            }
            
            utilities.formatSimilarity(user, aEvents).then(aEvents => {
                utilities.formatDate(user, aEvents).then(aEvents => {
                    utilities.formatPrice(user, aEvents).then(aEvents => {
                        res.setHeader('path', '/dashboard')
                        res.render('events/dashboard', {
                            pageTitle: 'Tech Events',
                            events: aEvents,
                            sessionId: localStorage.getItem('sessionId')
                        })
                    })
                }) 
            });

        }).catch(error => {
            console.log(new Error(error));
            res.redirect('/dashboard');
        })

        
    }).catch(error => {
        console.log(new Error(error));
        res.redirect('/dashboard');
    })
   
}


exports.postAddEvent = (req, res, next) => {

    if(localStorage.getItem('sessionId') == null) {
        return res.render('auth/authenticate', {
            pageTitle: 'Authentication',
        })
    }
    
    User.fetchUserById(localStorage.getItem('sessionId')).then( user => {

        // TODO: remove event node from main 

        var sUserExists = user[0][0] !== undefined ? true : false;
        if(sUserExists) {
            
            user = user[0][0];
            utilities.addToEventArray(user, req).then(result => {

                if(!result) {
                    console.log(new Error("Event already exists"));
                    return res.redirect('/dashboard');
                }

                var sUpdatedEvents = result;
                
                User.updateUserEvents(localStorage.getItem('sessionId'), sUpdatedEvents).then( () => {
                    return res.redirect('/dashboard');
                }).catch(error => {
                    console.log(new Error(error));
                    return res.redirect('/dashboard');
                });

            });
 
        } else {
            console.log(new Error("Invalid user id"));
            return res.redirect('/dashboard');
        }

    }).catch(error => {
        console.log(new Error(error));
        return res.redirect('/dashboard');
    })    
}

