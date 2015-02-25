var _ = require('lodash');
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  username: String,
  password: String,
  roles: { type: [], default: [] }
})

// Set addRoles function
schema.methods.addRoles = function(role1, role2) {
  var roles;

  if (arguments.length === 1) roles = role1;
  if (arguments.length === 2) roles = [role1, role2];

  this.roles = this.roles ||  [];
  if (!roles) return;

  if (!_.isArray(roles)) roles = [roles];
  this.roles = _.union(this.roles, roles)
}

var User = mongoose.model('User', schema);

module.exports = User;
