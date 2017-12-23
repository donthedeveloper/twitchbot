require('dotenv').config();
const tmi = require('tmi.js');

const options = {
    options: {
        debug: true
    }, 
    connection: {
        reconnect: true
    }, 
    identity: {
        username: 'ResponsiveBot',
        password: process.env.OAUTH
    },
    channels: ['#summit1g']
};

const client = new tmi.client(options);
client.connect();