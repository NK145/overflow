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

router.get('/', (req, res, next) => {
});

router.post('/', (req, res, next) => {
    const qid = sanitizeHtml(req.body.qid);
    const sql = `update questions set votes = votes+1 where qid = '${qid}'`;
    con.query(sql, (err, result, fields) => {
        res.send({'result' : 'ok'});
    });
    // res.send("nk");
});

module.exports = router;
