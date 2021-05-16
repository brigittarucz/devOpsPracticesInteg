const assert = require('assert');
const { expect } = require('chai');
const Event = require('../models/event');

describe('Test event model fetchEvents()', () => {
    it('Should get event ID 5d8ade45...', (done) => {
        Event.fetchEvents()
            .then(res => {
                var event = res[0][1];
                expect(event.id).to.equal('5d8ade45-61cb-4cde-8a64-838d4a23541e');
                done();
            })
            .catch(error => console.log('Events not retrieved: ', error))
    });
});