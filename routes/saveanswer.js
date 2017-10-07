/**
 * Created by sonu on 23/9/17.
 */
'use strict';
const express = require('express');
const router = express.Router();
const sanitizeHtml = require('sanitize-html');
const mysql = require('mysql');

const config = require('./config');
const con = mysql.createConnection(config.MYSQL);

router.post('/', (req, res, next) => {
    const qid = sanitizeHtml(req.body.questionid);
    const answer = sanitizeHtml(req.body.answer);
    const uid = sanitizeHtml(req.session.user[0].id); //change it back
    // const  uid = 25;
    console.log(`${qid } \n${ answer}`);

    const sql = `INSERT INTO answer ( qid, uid, answer , answeredtime) VALUES ( '${qid}', '${uid}', '${answer}' , CURRENT_TIMESTAMP);`;
    con.query(sql, (err, result, fields) => {
        res.redirect(`/questionbyid?id=${qid}`);
    });


});

module.exports = router;
