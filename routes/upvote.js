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

router.get('/', function(req, res, next) {
});

router.post('/', function(req, res, next) {
    const qid = sanitizeHtml(req.body.qid);
    var sql = "update questions set votes = votes+1 where qid = '"+qid+"'";
    con.query(sql, function (err, result, fields) {
        res.send({"result" : "ok"});
    });
    // res.send("nk");
});

module.exports = router;

