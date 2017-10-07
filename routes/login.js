/**
 * Created by sonu on 21/9/17.
 */
'use strict';
const express = require('express');
const router = express.Router();
const sanitizeHtml = require('sanitize-html');
const mysql = require('mysql');

const config = require('./config');
const con = mysql.createConnection(config.MYSQL);
const staterData = {
    title: 'Express',
    company : ' TECH OVERFLOW ',
    username: ''
};

/* GET home page. */
router.get('/', (req, res, next) => {
    if (!req.session.user) {
        res.render('login', staterData);
    } else {
        res.redirect('/');
    }
});
router.post('/', (req, res, next) => {
    const email = sanitizeHtml(req.body.email);
    const password = sanitizeHtml(req.body.password);
    const sql = ` select * from  login where email = '${email}' and password ='${password}'`;
    console.log(sql);
    con.query(sql, (err, result, fields) => {
        console.log(JSON.stringify(result));
        if (result !== null) {
            req.session.user = result;
            res.redirect('/');
        } else {
            console.log(result);
            res.render('login', {'error' : 'User not found'});
        }
    });
});

module.exports = router;
