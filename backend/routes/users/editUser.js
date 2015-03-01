var passwordHash = require('password-hash');
var User = require('../../models/user');

var editUser = function(req, res) {
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
}

module.exports = editUser;
