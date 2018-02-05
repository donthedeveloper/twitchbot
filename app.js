require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const chalk = require('chalk');

const router = require('./server/routes');

// middleware
app.use(morgan('dev'));

const nunjucksConfigure = nunjucks.configure('server/templates', {
    noCache: true,
    express: app
});

app.use(express.static('browser/public'));

app.use('/', router);

const server = app.listen(process.env.PORT || 3000, function() {
    console.log(chalk.blue(`App is listening on port ${this.address().port}`));
});

const socketio = require('./server/socketio');
const socketServer = socketio.start(server);

// const irc = require('./server/irc');
// const attachedTools = {socketServer}
// irc.start(attachedTools);