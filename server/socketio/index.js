const io = require('socket.io');
const eventHandler = require('./events');

let socketServer;

const socketio = {
    start: function(server) {
        socketServer = io(server);
        eventHandler.attachEvents(socketServer);

        return socketServer;
    }
};

module.exports = socketio;