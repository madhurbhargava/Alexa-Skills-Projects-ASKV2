'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = 'your-alexa-skill-id';

const handlers = {
  'LaunchRequest': function () {
    this.response.shouldEndSession(false).speak('Welcome to Hello World Greeter.');
    this.emit(':responseReady');
  },
  'GreetHelloWorld': function () {
    this.emit('SayHello');
  },
  'SayHello': function () {
    this.response.speak('Hello World!');
    this.emit(':responseReady');
  }
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
