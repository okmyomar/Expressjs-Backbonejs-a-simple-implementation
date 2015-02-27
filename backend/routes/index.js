var express = require('express');
var User = require('../models/user');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('login');
})

router.get('/index', function(req, res) {
  console.log('fdsfdas');
  res.render('main');
})

// login function
router.post('/login', function(req, res) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (err) return res.send(err);

    if (user) {
      var isPasswordCorrect = user.checkPassword(req.body.password);
      if (isPasswordCorrect) res.status(200).send('Correct data!')
      res.status(400).send('Incorrect password');
    }

    res.status(404).send('User not found');
  })
});


module.exports = router;
