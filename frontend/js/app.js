define([
    'marionette',
    '/collections/userCollection.js',
    '/views/userEditor.js',
    '/views/usersView.js'
  ],

  function(
    Marionette,
    Users,
    UserEditor,
    UsersView
  ) {

  usersApp = new Backbone.Marionette.Application({
    regions: {
      mainRegion: '#main-container'
    }
  });

  var showUsers = function(users) {
    var usersView = new UsersView({ collection: users });

    usersView.on('childview:edit:user', function(child) {
      var editor = new UserEditor({ model:child.model });

      editor.on('save:user', function() {
        this.model.save()
        .success(function(data) {
          window.location = '/index';
        }).error(function(err) {
          console.log(err);
        });
      });
      usersApp.getRegion('mainRegion').show(editor);
    })

    usersApp.getRegion('mainRegion').show(usersView);
  };

  var users = new Users();
  users.fetch({
    success: showUsers,
    error: function(model, err) {console.log(err)}
  });
})

