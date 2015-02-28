'use strict';

// requirejs config
var requirejs = require('requirejs');
requirejs.config({
  baseUrl: '../views'
});

var UserEditor = requirejs('../userEditor');
//var expect = require('chai').expect;

describe('UserEditorView', function() {
  it('creates a user editor view', function() {
    console.log('fdf')
    var userEditor = new UserEditor()
  });
});
