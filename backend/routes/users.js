var express = require('express');
var router = express.Router();
var client = require('../models/user');

router.get('/', function(req, res) {
  res.render('index');
})

module.exports = router;
