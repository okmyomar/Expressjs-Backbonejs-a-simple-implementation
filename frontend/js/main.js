require.config({
  paths: {
    jquery: '/node_modules/jquery/dist/jquery',
    underscore: '/node_modules/underscore/underscore',
    backbone: '/node_modules/backbone/backbone',
    marionette: '/node_modules/backbone.marionette/lib/backbone.marionette',
    hbs: '/bower_components/require-handlebars-plugin/hbs'
  },
  hbs: {
    helpers: true,
    i18n: false,
    templateExtension: 'hbs',
    partialsUrl: ''
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
})
