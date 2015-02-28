define(['marionette', 'hbs!/templates/userEditor'], function(Marionette, UserEditorTmpl) {
  'use strict';

  var UserEditor = Marionette.ItemView.extend({
    className: 'row',
    events: {
      'click #addRoleBtn': 'addRoleInput',
      'click #save': 'saveUser'
    },

    template: function(serializedData) {
      return UserEditorTmpl(serializedData);
    },

    addRoleInput: function() {
      var input = $('<input>');
      var li = $('<li>').append(input);
      this.$el.find('#role-list').append(li);
    },

    saveUser: function() {
      var data;
      var roles = [];
      var roleList = $('ul#role-list input');
      $.each(roleList, function(i, role) {
          var val = $(role).val();
          if (val) roles.push(val);
      });

      this.model.set('roles', roles);
      this.trigger('save:user')
    }
  });

  return UserEditor;
})
