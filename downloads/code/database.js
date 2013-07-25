// database.js
var db = require('mongoose');
db.connect('mongodb://localhost/main');

var db_with_logs = db.createConnection('mongodb://some_other_host/logger');

exports.db = db;
exports.db_with_logs = db_with_logs;
