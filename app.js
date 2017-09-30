var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var session = require('express-session');
var mysql = require('mysql');

var index = require('./routes/index');
var users = require('./routes/users');
var signup = require('./routes/signup');
var savequestion = require('./routes/savequestion');
var questions = require('./routes/questions');
var questionbyid = require('./routes/questionbyid');
var saveanswer = require('./routes/saveanswer');
var login = require('./routes/login');
var logout = require('./routes/logout');
var downvote = require('./routes/downvote');
var upvote = require('./routes/upvote');

var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "overflow"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to database");
});
var sess = {
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
app.use('/saveQuestion', savequestion);
app.use('/questions', questions);
app.use('/questionbyid', questionbyid);
app.use('/saveanswer', saveanswer);
app.use('/signup', signup);
app.use('/logout', logout);
app.use('/downvote', downvote);
app.use('/upvote', upvote);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
