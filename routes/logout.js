/**
 * Created by sonu on 21/9/17.
 */
'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
