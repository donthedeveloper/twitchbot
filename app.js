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

app.listen(process.env.PORT || 3000, function() {
    console.log(chalk.blue(`App is listening on port ${this.address().port}`));
});

const irc = require('./server/irc');
irc.start();