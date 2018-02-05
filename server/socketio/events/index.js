module.exports = {
    attachEvents: function(socketServer) {
        socketServer.on('connection', (socket) => {
            console.log('A new client has connected!');
            console.log(socket.id);
        });
    }
};