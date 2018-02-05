module.exports = {
    attachEvents: function(client, attachedTools) {
        client.on('message', function(channel, userstate, message, self) {
            // Don't listen to my own message
            if (self) return;

            // Handle different message types
            switch(userstate['message-type']) {
                case 'action':
                    // This is an action message
                    break;
                case 'chat':
                    // This is a chat message
                    const messageObj = userstate;
                    messageObj.message = message;
                    attachedTools.socketServer.emit('chat message', messageObj);

                    break;
                case 'whisper':
                    // This is a whisper
                    break;
                default:
                    break;
            }
        });
    }
};