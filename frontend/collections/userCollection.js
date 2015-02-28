define(['backbone', '/userModel.js'], function(Backbone, User) {
  var Users = Backbone.Collection.extend({
    model: User,
    url: '/users'
  });

  return Users;
})
