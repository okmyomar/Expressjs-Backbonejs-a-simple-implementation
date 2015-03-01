var expect = require('chai').expect;
var sinon = require('sinon');
var getUsers = require('../routes/users/getUser');
var addUser = require('../routes/users/addUser');

var config = require('../config');
var User = require('../models/user');

describe('User tests', function() {
  beforeEach(function(done) {
    if(config.db.readyState === 1) done();

    config.db.on('connected', function() {
      done();
    })
  })

  it('gives a response', function(done) {
    try {
      var req = {
        params: { id: 1 }
      };

      var res = {
        json: function() {},
        send: function() {}
      };

      sinon.spy(res, 'json')
      getUsers(req, res);
      expect(res.json.calledTwice);
      done();
    } catch (err) {
      done(err);
    }
  });
});
