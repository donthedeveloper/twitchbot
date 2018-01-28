module.exports = {
    options: {
        debug: false
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