var _ = require('lodash');
var express = require('express');
var passwordHash = require('password-hash');
var router = express.Router();
var User = require('../models/user');

// Users behavior
var getUsers = require('./users/getUsers');
var addUser = require('./users/addUser');
var editUser = require('./users/editUser');
var getUser = require('./users/getUser');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', addUser);
router.put('/:id', editUser);

module.exports = router;
