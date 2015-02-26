
var showUsers = function(users) {
  var data = { users: users };
  var source = $("#user-list").html();
  var template = Handlebars.compile(source);
  var html = template(data);
  $('#main-container').html(html);
}

var showNewUsers = function(users) {
  var source = $("#add-user").html();
  var template = Handlebars.compile(source);
  console.log($(template));
  console.log($(template).find('button#save-user'));

  var html = template();

  $('#main-container').html(html);
   $('button#save-user').on('click', function() {
    data = {
      username: $('input#username').val(),
      password: $('input#password').val()
    }

    $.ajax({
      type: 'POST',
      url: '/users',
      data: data
    }).done(function(data) {
      $('#main-container').html(data.message);
    }).error(function(err) {
      console.log(err);
    });
  });
}

$('document').ready(function() {
  $('#getUsersBtn').on('click', function() {

    $.ajax({
      type: 'GET',
      url: '/users'
    }).done(function(data) {
      showUsers(data);
    }).error(function(err) {
      console.log(err);
    });
  });

  $('#createUserBtn').on('click', function() {
    showNewUsers();
  });
});
