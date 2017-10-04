/**
 * Created by sonu on 22/9/17.
 */
'use strict';
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const config = require('./config');
const con = mysql.createConnection(config.MYSQL);
const staterData = {
    title: 'Express',
    company : 'TECH OVERFLOW',
    username: '',
    questions:[],
    answers : []
};

/* GET home page. */
router.get('/', (req, res, next) => {
    const id = req.query.id;
    let sql = `SELECT * FROM questions , login  where questions.qid = '${id}' and questions.askedby = login.id `;
    con.query(sql, (err, result, fields) => {
        staterData.questions = result;
        sql = `SELECT * FROM  answer  , login  where answer.qid = '${id}' and login.id = answer.uid order by answeredtime desc`;
        con.query(sql, (err, result, fields) => {
            staterData.answers = result;
            res.render('questionbyid', staterData);
        });

    });

});

module.exports = router;
