var express = require('express');
var router = express.Router();
const userModel = require('./users');
const paymentModel = require('./payment');
const courseModel = require('./mycourse');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('services', { title: 'Express' });
});

module.exports = router;
