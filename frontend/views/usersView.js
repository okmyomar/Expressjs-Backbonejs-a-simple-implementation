 define(['marionette', 'hbs!/templates/user', 'hbs!/templates/usersTable'], function(Marionette, UserTmpl, UsersTableTmpl) {
  'use strict';

  var UserView = Marionette.ItemView.extend({
    template: function(serializedData) {
      //return Handlebars.templates['user.hbs'](serializedData);
      return UserTmpl(serializedData);
    },

    tagName: 'tr',
    triggers: {
      click: 'edit:user'
    }
  });

  var UsersView = Marionette.CompositeView.extend({
    template: function(serializedData) {
      //return Handlebars.templates['usersTable.hbs'](serializedData);
      return UsersTableTmpl(serializedData);
    },

    childView: UserView,
    childViewContainer: 'tbody',
    tagName: 'table',
    className: 'table table-striped'
  });

  return UsersView;
})
