var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var users = require('./routes/users');
var path = require('path');

var app = express();
app.use(bodyParser());
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use('/', users);
app.listen(config.listen_port);
console.log('listening in port:' + config.listen_port);
