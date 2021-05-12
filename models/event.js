const express = require('express');
const db = require('../util/database');

module.exports = class Event {
    constructor(id, title, date, location, topics, proffessional_target, topics_difficulty, event_link, attendance_price) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.location = location;
        this.topics = topics;
        this.proffessional_target = proffessional_target;
        this.topics_difficulty = topics_difficulty;
        this.event_link = event_link;
        this.attendance_price = attendance_price;
    }

    static fetchEvents() {
        return db.execute('SELECT * FROM events');
    }
}