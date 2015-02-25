var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  username: String,
  password: String,
  roles: { type: [], default: [] }
})

schema.methods.addRoles = function(roles) {
  this.roles = this.roles ||  [];
  if (!roles) return;

  if (!_.isArray(roles)) roles = [roles];
  this.roles = _.union(this.roles, roles)
}

var User = mongoose.model('User', schema);

module.exports = User;
