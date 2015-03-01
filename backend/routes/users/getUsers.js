var passwordHash = require('password-hash');
var User = require('../../models/user');

var getUsers = function(req, res) {
  var callback = function(err, users) {
    if (err) return res.send(err);
    res.json(users);
  }

  User.find().select('-password').exec(callback);
}

module.exports = getUsers;
