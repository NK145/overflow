/**
 * Created by sonu on 21/9/17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;

