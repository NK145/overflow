var express = require('express');
var router = express.Router();

var staterData = {
    title: 'Tech Overflow',
    company : "TECH OVERFLOW",
    username: ""
};

/* GET home page. */
router.get('/', function(req, res, next) {
    if(!req.session.user) {

        res.render('default' , staterData);
    } else {
        staterData.username = req.session.user[0].name;
    // staterData.username = "narendra";
    console.log( staterData.username + " dgsd fsssssssssssssssssssssssssssssssss ");
        res.render('index', staterData);
    }
});

module.exports = router;
