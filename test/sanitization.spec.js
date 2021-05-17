var expect = require("chai").expect;
var utilities = require("../public/js/functions");

var user = {
  id: '265335fa-5c4a-42af-b5af-aac83d4f9a57',
  email: 'user@yahoo.com',
  password: 'password',
  proffesion: 'Specify in tests',
  experience: 10,
  interests: 'JS,Angular,Node,PHP,SASS',
  events: ''
}

var events = [
  {
    id: '3c1246a5-fee9-485d-adb3-24f029c528b4',
    title: 'Deep Dive Design Thinking Workshop',
    date: '06.10.2020-07.10.2020',
    location: 'Catacombs of Zoom',
    topics: 'innovation, design thinking, business models, visualization and mapping for solution creation',
    proffessional_target: 'entrepreneur, founder, designer, freelancer',
    topics_difficulty: 1,
    event_link: 'https://www.eventbrite.com/e/online-2-day-deep-dive-in-design-thinking-mindshoptm-tickets-121347161627?aff=ebdssbdestsearch',
    attendance_price: 'F540'
  },
  {
    id: '5d8ade45-61cb-4cde-8a64-838d4a23541e',
    title: 'Web Unleashed',
    date: '05.10.2020-07.10.2020',
    location: 'Virtual',
    topics: 'new technologies, algorithms, frontend development',
    proffessional_target: 'developer, business',
    topics_difficulty: 1,
    event_link: 'https://fitc.ca/event/webu20/',
    attendance_price: 'F310'
  },
  {
    id: '98ee67f1-a2d8-4872-b87b-e6b91f1b7d1a',
    title: 'ReactiveConf',
    date: '08.03.2021',
    location: 'Prague',
    topics: 'react, reason, GraphQL, vue, security',
    proffessional_target: 'developer, programmer',
    topics_difficulty: 2,
    event_link: 'https://reactiveconf.com/',
    attendance_price: 'NA'
  },
  {
    id: 'af2fb58d-594c-4f72-9536-5951a150f8bf',
    title: 'Web Summit',
    date: '02.12.2020-04.12.2020',
    location: 'Lisbon',
    topics: 'marketing and media, AI and machine learning, data science, software development, mobile development, privacy and security, business development, commerce, gaming and VR',
    proffessional_target: 'developer, entrepreneur, investor, business, data scientist, programmer',
    topics_difficulty: 5,
    event_link: 'https://websummit.com/',
    attendance_price: 'F885'
  },
  {
    id: 'e6880fab-0129-4faf-bf5a-00d91a9d5d61',
    title: 'RTE2020',
    date: '13.10.2020-14.10.2020',
    location: 'Virtual',
    topics: 'product experience design, monetization, trending in machine learning, trending in VR/AR, ideation hackaton, startup 101',
    proffessional_target: 'developer, entrepreneur, founder, designer',
    topics_difficulty: 4,
    event_link: 'https://www.runtheworld.today/app/c/rte2020',
    attendance_price: '0'
  }
]

describe("Utility methods", function() {
  describe("Checks recommendation algorithm retrieval", function() {
    it("User is a Backend Developer", function() {
      user.proffesion = 'Backend Developer';

      utilities.formatSimilarity(user, events).then(eventsResults => {
        var eventsResultsCount = eventsResults.filter(el => el.hasOwnProperty('similarity')).length;         

        expect(eventsResultsCount).to.equal(3);
      })

    });
    it("User is a Javascript Developer", function() {
      user.proffesion = 'Javascript Developer';

      utilities.formatSimilarity(user, events).then(eventsResults => {
        var eventsResultsCount = eventsResults.filter(el => el.hasOwnProperty('similarity')).length;         

        expect(eventsResultsCount).to.equal(1);
      })
    })
  })
  describe("Checks data formatting for price", function() {
    it("Price conversion to include From", function() {
      var event = [events[0]];
      event[0].attendance_price = 'F200';

      utilities.formatPrice(user, event).then(eventResult => {
        var eventResultPrice = eventResult.attendance_price;

        expect(eventResultPrice).to.equal('From 200DKK')
      })
    })
    it("Price conversion to include Not available", function() {
      var event = [events[0]];
      event[0].attendance_price = 'NA';

      utilities.formatPrice(user, event).then(eventResult => {
        var eventResultPrice = eventResult.attendance_price;

        expect(eventResultPrice).to.equal('Not available')
      })
    })
    it("Price conversion to include Free", function() {
      var event = [events[0]];
      event[0].attendance_price = '0';

      utilities.formatPrice(user, event).then(eventResult => {
        var eventResultPrice = eventResult.attendance_price;

        expect(eventResultPrice).to.equal('Free')
      })
    })
    it("Price conversion to discard invalid strings", function() {
      var event = [events[0]];
      event[0].attendance_price = 'Invalid';

      utilities.formatPrice(user, event).then(eventResult => {
        var eventResultPrice = eventResult.attendance_price;

        expect(eventResultPrice).to.equal('')
      })
    })
    it("Price conversion to discard invalid data types", function() {
      var eventsArr = [events[0], events[1]];
      eventsArr[0].attendance_price = 1;
      eventsArr[1].attendance_price = false;

      utilities.formatPrice(user, eventsArr).then(eventsResults => {
        var eventResultPrice1 = eventsResults[0].attendance_price;
        var eventResultPrice2 = eventsResults[1].attendance_price;

        expect(eventResultPrice1).to.equal('');
        expect(eventResultPrice2).to.equal('');
      })
    })
  })
});