// const e = require('express');
const db = require('../util/database');

module.exports = class User {
    constructor(id, email, password, proffesion, experience, interests, events) {
        this.id = id;
        this.email = email;
        // TODO: hash
        this.password = password;
        this.proffesion = proffesion;
        this.experience = experience;
        this.interests = interests;
        this.events = events;
    }

    static fetchUser(email) {
        return db.execute('SELECT * FROM users WHERE email = ?', [email]);
    }

    createUser() {
        return db.execute('INSERT INTO users (id, email, password, proffesion, experience, interests, events) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [this.id, this.email, this.password, this.proffesion, this.experience, this.interests, this.events]);
    }

    static fetchUserById(id) {
        return db.execute('SELECT * FROM users WHERE users.id = ?', [id]);
    }

    saveUser() {
        return db.execute('UPDATE users SET email = ?, password = ?, proffesion = ?, experience = ?, interests = ? WHERE users.id = ?',
            [this.email, this.password, this.proffesion, this.experience, this.interests, this.id]);
    }

    static updateUserEvents(id, event) {
        return db.execute('UPDATE users SET events = ? WHERE users.id = ?', [event, id]);
    }

}
