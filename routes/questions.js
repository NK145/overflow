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
    questions:[]
};

router.get('/', (req, res, next) => {
    const sql = 'SELECT * FROM questions , login where askedby = id order by askedtime desc ';
    con.query(sql, (err, result, fields) => {
        staterData.questions = result;
        // staterData.username = req.session.user[0].name;
        console.log(result[0].askedtime);
        res.render('questions', staterData);
    });
});

module.exports = router;
