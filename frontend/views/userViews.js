var UserEditor = Backbone.Marionette.ItemView.extend({
  className: 'row',
  events: {
    'click #addRoleBtn': 'addRoleInput',
    'click #save': 'saveUser'
  },

  template: function(serializedData) {
    return Handlebars.templates['userEditor.hbs'](serializedData);
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
        val = $(role).val();
        if (val) roles.push(val);
    });

    this.model.set('roles', roles);
    this.trigger('save:user')
  }
});

var UserView = Backbone.Marionette.ItemView.extend({
  template: function(serializedData) {
    return Handlebars.templates['user.hbs'](serializedData);
  },

  tagName: 'tr',
  triggers: {
    click: 'edit:user'
  }
});

var UsersView = Backbone.Marionette.CompositeView.extend({
  template: function(serializedData) {
    return Handlebars.templates['usersTable.hbs'](serializedData);
  },

  childView: UserView,
  childViewContainer: 'tbody',
  tagName: 'table',
  className: 'table table-striped'
});
