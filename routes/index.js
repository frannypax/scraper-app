var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/news', function(req, res, next) {
    res.render('news');
});


module.exports = router;
