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
    company : 'TECH OVERFLOW',
    username: ''
};

/* GET home page. */
router.get('/', (req, res, next) => {
    if (!req.session.user) {
        res.render('signup', staterData);
    } else {
        // staterData.username = req.session.user[0].name;
        // res.render('index', staterData);
        res.redirect('/');
    }
});
router.post('/', (req, res, next) => {
    const fname = sanitizeHtml(req.body.fname);
    const lname = sanitizeHtml(req.body.lname);
    const email = sanitizeHtml(req.body.email);
    const password = sanitizeHtml(req.body.password);
    let sql = `INSERT INTO login(name, email, password) ' +
        values('${fname} ${lname}','${email}','${password}')`;
    con.query(sql, (err, result, fields) => {});
    sql = `SELECT * FROM login where email = '${email}'`;
    con.query(sql, (err, result, fields) => {
        req.session.user = result;
        res.redirect('/');
    });
});

module.exports = router;
