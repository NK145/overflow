/**
 * Created by sonu on 21/9/17.
 */
var express = require('express');
var router = express.Router();
var sanitizeHtml = require('sanitize-html');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "overflow"
});
var staterData = {
    title: 'Express',
    company : "TECH OVERFLOW",
    username: ""
};

/* GET home page. */
router.get('/', function(req, res, next) {
    if(!req.session.user) {
        res.render('signup' , staterData);
    } else {
        // staterData.username = req.session.user[0].name;
        // res.render('index', staterData);
        res.redirect('/');
    }
});
router.post('/', function(req, res, next) {
    const fname = sanitizeHtml(req.body.fname);
    const lname = sanitizeHtml(req.body.lname);
    const email = sanitizeHtml(req.body.email);
    const password = sanitizeHtml(req.body.password);
    var sql = "INSERT INTO login(name, email, password) " +
        "values('"+fname+" "+lname+"','"+email+"','"+password+"')";
    con.query(sql, function (err, result, fields) {});
    sql = "SELECT * FROM login where email = '"+email+"'";
    con.query(sql, function (err, result, fields) {
        req.session.user = result;
        res.redirect('/');
    });
});

module.exports = router;

