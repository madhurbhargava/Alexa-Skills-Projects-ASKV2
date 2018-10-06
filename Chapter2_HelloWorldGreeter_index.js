'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.b713e39c-b836-4a6a-84c2-2975198c05aa';

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
