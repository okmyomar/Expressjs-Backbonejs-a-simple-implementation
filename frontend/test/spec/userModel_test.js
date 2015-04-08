define(['../../models/userModel', 'chai'], function(UserModel, chai) {
  expect = chai.expect;

  describe('UserModel', function() {
    it('creates a model"', function() {
      var user = new UserModel();
      expect(user).to.be.an.instanceof(UserModel);
    });
  });
});
