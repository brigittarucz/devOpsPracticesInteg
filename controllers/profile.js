// const express = require('express');

const { LocalStorage } = require('node-localstorage');
localStorage = new LocalStorage('./local_storage');

var utilities = require('../public/js/functions');
const User = require('../models/user');
const Event = require('../models/event');

exports.getProfile = (req, res) => {

    if (localStorage.getItem('sessionId') == null) {
        return res.render('auth/authenticate', {
            pageTitle: 'Authentication',
        })
    }

    User.fetchUserById(localStorage.getItem('sessionId')).then(aUser => {
        var user = aUser[0][0];
        var sUserExists = user !== undefined ? true : false;

        if (sUserExists) {
            Event.fetchEvents().then(results => {
                // console.log(typeof(results[0]));
                // console.log(results[0]);
                var aTotalEvents = results[0];
                var aUserEvents = user.events;

                var aSuggestedEvents = [];

                // console.log(user);
                // console.log(aUserEvents);
                // console.log(aTotalEvents);

                utilities.formatSimilarity(user, aTotalEvents);
                utilities.formatDate(user, aTotalEvents);
                utilities.formatPrice(user, aTotalEvents);

                for (const oEvent of aTotalEvents) {
                    if (oEvent.similarity > 10) {
                        aSuggestedEvents.push(oEvent);
                    }
                }

                if (!user.events.length) {
                    res.render('events/profile', {
                        pageTitle: 'Profile',
                        user: user,
                        events: 'Search events',
                        eventsDescription: [],
                        eventsSuggested: aSuggestedEvents,
                        sessionId: localStorage.getItem('sessionId')
                    })
                } else {
                    aUserEvents = aUserEvents.slice(1, aUserEvents.length - 1);
                    aUserEvents = aUserEvents.replace(/"/g, '');
                    aUserEvents = aUserEvents.split(",");

                    var aCalendarEvents = [];

                    aTotalEvents.forEach(event => {
                        aUserEvents.forEach(userEvent => {
                            if (userEvent == event.id) {
                                aCalendarEvents.push(event);
                            }
                        })
                    })

                    for (let i = 0; i < aCalendarEvents.length; i++) {
                        for (let j = 0; j < aSuggestedEvents.length; j++) {
                            if (aCalendarEvents[i].id === aSuggestedEvents[j].id) {
                                aSuggestedEvents.splice(j, 1);
                                break;
                            }
                        }
                    }

                    utilities.formatPrice(user, aCalendarEvents);

                    user.interests = user.interests.split(',');

                    res.render('events/profile', {
                        pageTitle: 'Profile',
                        user: user,
                        events: aCalendarEvents,
                        eventsDescription: ["2021's leadership ethos", "Opening ceremony", "From gaming to mainstream",
                            "Digital democracy with a purpose", "Work after crisis", "Can technology save the world?",
                            "Brand obsessions", "Paving the way for sustainable future", "What is wrong with capitalism?"],
                        eventsSuggested: aSuggestedEvents,
                        sessionId: localStorage.getItem('sessionId')
                    })
                }

            }).catch(error => {
                console.log(new Error(error));
                res.redirect('/profile');
            })

        } else {
            console.log(new Error("Invalid user id"));
            res.redirect('/profile');
        }


    }).catch(error => {
        console.log(new Error(error));
        res.redirect('/profile');
    })

}

exports.postAddFromSuggested = (req, res) => {

    if (localStorage.getItem('sessionId') == null) {
        return res.render('auth/authenticate', {
            pageTitle: 'Authentication',
        })
    }

    User.fetchUserById(localStorage.getItem('sessionId')).then(user => {

        // TODO: remove event node from main 

        var sUserExists = user[0][0] !== undefined ? true : false;
        if (sUserExists) {
            user = user[0][0];

            // TODO: continue

            utilities.addToEventArray(user, req).then(result => {
                if (!result) {
                    console.log(new Error("Event already exists"));
                    return res.redirect('/profile');
                }

                var sUpdatedEvents = result;

                User.updateUserEvents(localStorage.getItem('sessionId'), sUpdatedEvents).then(() => {
                    return res.redirect('/profile');
                }).catch(error => {
                    console.log(new Error(error));
                    return res.redirect('/profile');
                })

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

exports.postProfile = (req, res) => {

    if (localStorage.getItem('sessionId') == null) {
        return res.render('auth/authenticate', {
            pageTitle: 'Authentication',
        })
    }
    // TODO: check for changes

    User.fetchUserById(localStorage.getItem('sessionId')).then(user => {

        var sUserExists = user[0][0] !== undefined ? true : false;

        if (sUserExists) {

            if (!req.body.password) {
                console.log(new Error("Password unset"));
                return res.redirect('/profile');
            }

            var userDatabase = user[0][0];
            userDatabase.interests = userDatabase.interests.replace(/\s/g, '');
            delete userDatabase.events;

            var userInput = new User(userDatabase.id, req.body.email, req.body.password, req.body.proffesion, parseInt(req.body.experience), req.body.interests, '');
            delete userInput.events;

            if (userDatabase.password != userInput.password) {
                console.log(new Error("Password incorrect"));
                return res.redirect('/profile');
            }

            if (req.body.newpassword) {

                if (req.body.newpassword != req.body.repeatpassword) {
                    console.log(new Error("Passwords do not match"));
                    return res.redirect('/profile');
                }

                userInput.password = req.body.newpassword;
            }

            if (userDatabase.email == userInput.email) {
                if (userDatabase.password == userInput.password) {
                    if (userDatabase.proffesion == userInput.proffesion) {
                        if (userDatabase.experience == userInput.experience) {
                            if (userDatabase.interests == userInput.interests) {
                                console.log(new Error("No changes"));
                                return res.redirect('/profile');
                            }
                        }
                    }
                }
            }

            userInput.saveUser().then(response => {
                console.log(response[0]);
                console.log("Changes have been made");
                return res.redirect('/profile');
            }).catch(error => {
                console.log(new Error("Changes have not been made, due to " + error));
                return res.redirect('/profile');
            })

        } else {
            console.log(new Error("Invalid user id"));
            res.redirect('/dashboard');
        }


    }).catch(() => {
        console.log(new Error("Invalid user id"));
        res.redirect('/dashboard');
    })

}

exports.postDeleteFromCalendar = (req, res) => {

    if (localStorage.getItem('sessionId') == null) {
        return res.render('auth/authenticate', {
            pageTitle: 'Authentication',
        })
    }

    User.fetchUserById(localStorage.getItem('sessionId')).then(user => {
        var aUserEvents = JSON.parse(user[0][0].events);
        console.log(aUserEvents.length);
        for (let i = 0; i < aUserEvents.length; i++) {
            if (aUserEvents[i] === req.body.eventId) {
                aUserEvents.splice(i, 1);
                break;
            }
        }

        User.updateUserEvents(localStorage.getItem('sessionId'), (aUserEvents.length > 0 ? JSON.stringify(aUserEvents) : "")).then(() => {
            return res.redirect('/profile');
        }).catch(error => {
            console.log(new Error(error));
            return res.redirect('/profile');
        })

    }).catch(error => {
        console.log(new Error(error));
        return res.redirect('/profile');
    })
}


