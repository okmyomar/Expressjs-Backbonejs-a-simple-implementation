require.config({
  paths: {
    jquery: '../node_modules/jquery/dist/jquery',
    underscore: '../node_modules/underscore/underscore',
    backbone: '../node_modules/backbone/backbone',
    marionette: '../node_modules/backbone.marionette/lib/backbone.marionette',
    hbs: '../bower_components/require-handlebars-plugin/hbs',
    mocha: '../node_modules/mocha/mocha',
    chai: '../node_modules/chai/chai'
  },
  shim: {
    'chai-jquery': ['jquery', 'chai'],
    mocha: {exports: 'mocha'}
  }
  //urlArgs: 'bust=' + (new Date()).getTime()
});

define(function(require) {
  var chai = require('chai');
  var expect = require('chai').expect;
  var mocha = require('mocha');
  require('jquery');

  mocha.setup('bdd');

  // Chai
  var should = chai.should();
  expect = chai.expect;

  require([
    './spec/userModel_test',
    './spec/userEditor_test'
  ], function(require) {
    mocha.run();
  });

});
