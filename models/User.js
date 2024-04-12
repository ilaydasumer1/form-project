// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
});

module.exports = mongoose.model('User', userSchema);
