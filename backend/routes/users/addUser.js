var User = require('../../models/user');

var addUser = function(req, res) {
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
}

module.exports = addUser;
