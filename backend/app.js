var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var users = require('./routes/users');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();

app.use(bodyParser());
app.set('views',  '../frontend/views')
app.use(serveStatic('../frontend/js'));

app.set('view engine', 'jade')
app.use('/', users);
app.listen(config.listen_port);
console.log('listening in port:' + config.listen_port);
