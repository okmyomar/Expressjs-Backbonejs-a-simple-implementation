var mongoose = require('mongoose');

bdName = 'users_db';
mongoose.connect('mongodb://localhost:27017/' + bdName);

exports.db = mongoose.connection;
exports.listen_port = 9999;
