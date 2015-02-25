var User = require('../models/user');
var should = require('chai').should();

describe('User tests', function() {
  var user;

  it('should add roles to User', function() {
    var usr = new User();
    usr.addRoles('a');
    usr.get('roles').length.should.equal(1);
    usr.get('roles').should.contain('a');
    usr.addRoles('a', 'b');
    usr.get('roles').length.should.equal(2);
    usr.get('roles').should.contain('b');
    usr.addRoles(['c', 'd']);
    usr.get('roles').length.should.equal(4);
    usr.get('roles').should.contain('d');
  });

  it('should save a User', function() {
    var newUser = new User({"username":"jkjjkj", "password":"1234567", "roles":["developer", "designer"]});

    newUser.save(function(err) {
      if (err) console.log(err);
      console.log({ message: 'User added' });
    });

    // return newUser.save(function(err) {
    //   console.log(err);
    //   done();
    // });
  });

  it('plaintext password should not be saved', function() {
    return user.get('password').should.not.equal('supersecRet');
  });

  // it('should list users', function() {
  //   var users = new collections.Users();
  //   return users
  //     .fetch()
  //     .then(function() {
  //       users.length.should.equal(1);
  //     });
  // });
});
