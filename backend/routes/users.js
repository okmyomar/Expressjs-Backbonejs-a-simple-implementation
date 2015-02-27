var _ = require('lodash');
var express = require('express');
var passwordHash = require('password-hash');
var router = express.Router();
var User = require('../models/user');


router.get('/', function(req, res) {
  var callback = function(err, users) {
    if (err) return res.send(err);
    res.json(users);
  }

  User.find().select('-password').exec(callback);
});

router.post('/', function(req, res) {
  var callback = function(err, users) {
    if (users.length < 1) {
      req.body.password = passwordHash.generate(req.body.password);
      var user = new User(req.body);
      user.save(function(err) {
        if (err) return res.send(err);

        res.send({ message: 'User added' });
      });
    } else {
      res.status(409).send('Username alredy exists, try a different one');
    }
  }

  User.find().where({'username': req.body.username}).exec(callback);
});

router.put('/:id', function(req, res) {
  if (req.body.password) {
    req.body.password = passwordHash.generate(req.body.password);
  }

  User.findById(req.params.id, function(err, user) {
    if (err) return res.send(err);

    //Using add roles
    user.addRoles(req.body.roles);
    delete(req.body.roles);

    for (prop in req.body) {
      user[prop] = req.body[prop];
    }

    roles = user['roles'];

    user.save(function(err) {
      if (err) return res.send(err);

      res.send({ message: 'User modified' });
    });
  });
});

router.get('/:id', function(req, res) {
  User.findById(req.params.id , '-password', function(err, user) {
    if (err) return res.send(err);

    res.json(user);
  });
});

module.exports = router;
