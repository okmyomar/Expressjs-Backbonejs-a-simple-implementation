var User = require('../models/user');
var expect = require('chai').expect;
var should = require('chai').should();

var config = require('../config');

describe('User tests', function() {
  var user;

  beforeEach(function(done) {
    if(config.db.readyState === 1) done();

    config.db.on('connected', function() {
      done();
    })
  })

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

  it('should save a user', function(done) {
    user = new User({
      username: "userExample",
      password:"1234567",
      roles:["developer", "designer"]
    });

    user.save(function(err) {
      if (err) done(err);
      done();
    });
  });

  it('plaintext password should not be saved', function(done) {
    var id = user._id;

    User.findById(id, function(err, user) {
      if (err) done(err);
      user.get('password').should.not.equal('supersecRet');
      done();
    });
  });

  it('should list users, at least one', function(done) {
    User.count(function(err, count) {
      expect(count).to.be.above(0);
      done();
    });
  });
});
