var User = require('../../models/user');

var getUser = function(req, res) {
  User.findById(req.params.id , '-password', function(err, user) {
    if (err) {
      console.log('error');
      return res.send(err);
    }

    console.log('exito');
    res.json(user);
  });
}

module.exports = getUser;
