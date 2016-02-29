'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  provider: String,
  role: String,
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);



