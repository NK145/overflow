/**
 * Created by sonu on 23/9/17.
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


router.post('/', function(req, res, next) {
    const qid = sanitizeHtml(req.body.questionid);
    const answer = sanitizeHtml(req.body.answer);
    const uid = sanitizeHtml(req.session.user[0].id); //change it back
    // const  uid = 25;
    console.log(qid + " \n" + answer);

    var sql = "INSERT INTO answer ( qid, uid, answer , answeredtime) VALUES ( '"+qid+"', '"+uid+"', '"+answer+"' , CURRENT_TIMESTAMP);";
    con.query(sql, function (err, result, fields) {
        res.redirect('/questionbyid?id='+qid);
    });


});


module.exports = router;
