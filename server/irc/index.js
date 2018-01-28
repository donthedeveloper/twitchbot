const tmi = require('tmi.js');
const options = require('./config');
const eventHandler = require('./events');

const irc = {
    start: function() {
        const client = new tmi.client(options);
        client.connect();
        eventHandler.attachEvents(client);
    }
};

module.exports = irc;