var _ = require('lodash');
var express = require('express');
var passwordHash = require('password-hash');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res) {
  res.render('login');
})

router.get('/users', function(req, res) {
  var callback = function(err, users) {
    if (err) return res.send(err);
    res.location('/users');
    res.json(users);
  }

  User.find().select('-password').exec(callback);
});

router.post('/users', function(req, res) {
  var callback = function(err, users) {
    if (users.length < 1) {
      req.body.password = passwordHash.generate(req.body.password);
      var user = new User(req.body);
      user.save(function(err) {
        if (err) return res.send(err);

        res.send({ message: 'User added' });
      });
    } else {
      res.send({ message: 'Username alredy exists, try a different one' });
    }
  }

  User.find().where({'username': req.body.username}).exec(callback);
});

router.put('/users/:id', function(req, res) {
  if (req.body.password) {
    req.body.password = passwordHash.generate(req.body.password);
  }

  User.findById(req.params.id, function(err, user) {
    if (err) return res.send(err);

    for (prop in req.body) {
      user[prop] = req.body[prop];
    }

    user.save(function(err) {
      if (err) return res.send(err);

      res.send({ message: 'User modified' });
    });
  });
});

router.get('/users/:id', function(req, res) {
  User.findById(req.params.id , '-password', function(err, user) {
    if (err) return res.send(err);

    res.json(user);
  });
});

// login function
router.post('/login', function(req, res) {
  User.findOne({ username: req.body.username }, function(err, user) {
    console.log(req.body);
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
