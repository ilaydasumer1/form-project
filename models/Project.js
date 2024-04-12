const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  type: String,
  description: String,
  budget: Number
});

module.exports = mongoose.model('Project', projectSchema);