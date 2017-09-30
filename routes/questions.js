/**
 * Created by sonu on 22/9/17.
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
    username: "",
    questions:[]
};

router.get('/', function(req, res, next) {
    sql = "SELECT * FROM questions , login where askedby = id order by askedtime desc ";
    con.query(sql, function (err, result, fields) {
        staterData.questions = result;
        // staterData.username = req.session.user[0].name;
        console.log(result[0].askedtime);
        res.render('questions', staterData);
    });
});

module.exports = router;
