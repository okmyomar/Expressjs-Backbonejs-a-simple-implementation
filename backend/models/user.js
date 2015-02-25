var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  username: String,
  password: String,
  roles: { type: [], default: [] }
})

var User = mongoose.model('User', schema);

module.exports = User;
