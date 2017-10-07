'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cons = require('consolidate');
const session = require('express-session');
const mysql = require('mysql');

const index = require('./routes/index');
const users = require('./routes/users');
const signup = require('./routes/signup');
const savequestion = require('./routes/savequestion');
const questions = require('./routes/questions');
const questionbyid = require('./routes/questionbyid');
const saveanswer = require('./routes/saveanswer');
const login = require('./routes/login');
const logout = require('./routes/logout');
const downvote = require('./routes/downvote');
const upvote = require('./routes/upvote');

const app = express();

const config = require('./config');
console.log(`Run at ${ process.env.NODE_ENV}`);

const con = mysql.createConnection(config.MYSQL);
con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
const sess = {
    secret: 'awhdRkRSKSLSIEHGugdYdfd'
};
app.use(session(sess));

// view engine setup
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use('/savequestion', savequestion);
app.use('/questions', questions);
app.use('/questionbyid', questionbyid);
app.use('/saveanswer', saveanswer);
app.use('/signup', signup);
app.use('/logout', logout);
app.use('/downvote', downvote);
app.use('/upvote', upvote);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
