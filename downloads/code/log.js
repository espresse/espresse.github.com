// log.js
var mongoose = require('mongoose');
var connection = require('./database');

var Schema = mongoose.Schema;

var Log = new Schema(
  // some fields
)

connection.model('Log', Log);
