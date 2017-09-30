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
    company : " TECH OVERFLOW ",
    username: ""
};

/* GET home page. */
router.get('/', function(req, res, next) {
    if(!req.session.user) {
        res.render('login' , staterData);
    } else {
        res.redirect('/');
    }
});
router.post('/', function(req, res, next) {
    const email = sanitizeHtml(req.body.email);
    const password = sanitizeHtml(req.body.password);
    var sql = " select * from  login where email = '"+email+"' and password ='"+password+"'";
    console.log(sql);
    con.query(sql, function (err, result, fields) {
        console.log(JSON.stringify(result));
        if(result !== null) {
            req.session.user = result;
            res.redirect('/');
        }else {
            console.log(result);
            res.render('login' ,{'error' : "User not found"} );
        }
    });
});

module.exports = router;

