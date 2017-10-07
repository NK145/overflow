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

router.post('/', (req, res, next) => {
    const title = sanitizeHtml(req.body.title);
    const description = sanitizeHtml(req.body.description);
    const tags = sanitizeHtml(req.body.tags);
    const sql = `INSERT INTO questions(title, description,tags, askedby, askedtime, votes , extra) 
        VALUES ( '${title}', '${description}', '${tags}', '${req.session.user[0].id}', CURRENT_TIMESTAMP, '0' , '0')`;
    con.query(sql, (err, result, fields) => {
        res.redirect('/questions');
    });


});

module.exports = router;
