var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res) {
  res.render('index');
})

router.get('/users', function(req, res) {
  User.find(function(err, users) {
    if (err) { return res.send(err); }

    res.json(users);
  });
})

router.post('/users', function(req, res) {
  var user = new User(req.body);

  user.save(function(err) {
    if (err) { return res.send(err); }

    res.send({ message: 'User added' });
  });
})

router.put('/users/:id', function(req, res) {
  User.findOne({ _id: req.params.id }, function(err, user) {
    if (err) { return res.send(err); }

    for (prop in req.body) {
      user[prop] = req.body[prop];
    }

    user.save(function(err) {
      if (err) { return res.send(err); }

      res.send({ message: 'User modified' });
    });
  });
})

router.get('/users/:id', function(req, res) {
  User.findOne({ _id: req.params.id }, function(err, user) {
    if (err) { return res.send(err); }

    res.json(user)
  });
})

module.exports = router;
