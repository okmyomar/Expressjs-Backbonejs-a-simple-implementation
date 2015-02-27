var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var users = require('./routes/users');
var routes = require('./routes/index');
var path = require('path');
var serveStatic = require('serve-static');
var handlebars = require('handlebars');

var app = express();

app.use(bodyParser());
app.set('views', 'views');
app.engine('html', require('consolidate').handlebars);
app.set('view engine', 'html')

app.use(express.static('../frontend/js'));
app.use(express.static('../frontend/models'));
app.use(express.static('../frontend/collections'));
app.use(express.static('../frontend/views'));
app.use(express.static('../frontend/templates'));
app.use(express.static('views'));

app.use('/', routes);
app.use('/users', users);

app.listen(config.listen_port);
console.log('listening in port:' + config.listen_port);
