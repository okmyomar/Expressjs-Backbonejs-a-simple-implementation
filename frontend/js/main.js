require.config({
  paths: {
    jquery: '/jquery/dist/jquery',
    underscore: '/underscore/underscore',
    backbone: '/backbone/backbone',
    marionette: '/backbone.marionette/lib/backbone.marionette'
  },
  shim: {
    'underscore': { exports: '_'},
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'marionette': {
      deps: ['jquery', 'underscore', 'backbone'],
      exports: 'Marionette'
    }
  }
})
require([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app'
  ],

  function(jquery, _, Backbone, Marionette, App) {
    console.log('hi there');
})
