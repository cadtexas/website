var express = require('express');
var router = express.Router();

/* GET workshop page */
router.get('/', function(req, res, next) {
  res.render('workshop', { title: 'CAD - Workshops'});
});

router.get('/intro-to-python', function(req, res, next) {
  res.render('intro', { title: 'CAD - Intro to Python'});
});

router.get('/advanced-python', function(req, res, next) {
  res.render('advanced', { title: 'CAD - Advanced Python'});
});

router.get('/cplusplus', function(req, res, next) {
  res.render('cplusplus', { title: 'CAD - C++'});
});

module.exports = router;
