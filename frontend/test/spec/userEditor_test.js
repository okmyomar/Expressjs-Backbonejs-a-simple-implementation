define([
    'backbone',
    'chai',
    '../../views/userEditor'
  ],

  function(Backbone, chai, UserEditor) {
  expect = chai.expect;

  describe('userEditor', function() {
    it('creates a userEditor"', function() {
      userEditor = new UserEditor();
      expect(userEditor).to.be.an.instanceof(UserEditor);
    });

    it('has correct className"', function() {
      var user = new Backbone.Model({
        username: 'omars',
        password: '123456',
        roleS: ['a', 'b', 'c']
      });

      var userEditor = new UserEditor({ model: user });
      userEditor.render();
      expect(userEditor.className).to.equal('row')
    });

  });
});
