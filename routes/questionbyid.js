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
    questions:[],
    answers : []
};

/* GET home page. */
router.get('/', function(req, res, next) {
    const id = req.query.id;
    sql = "SELECT * FROM questions , login  where questions.qid = '"+id+"' and questions.askedby = login.id ";
    con.query(sql, function (err, result, fields) {
        staterData.questions = result;
        sql = "SELECT * FROM  answer  , login  where answer.qid = '"+id+"' and login.id = answer.uid order by answeredtime desc";
        con.query(sql, function (err, result, fields) {
            staterData.answers = result;
            res.render('questionbyid', staterData);
        });

    });

});

module.exports = router;
