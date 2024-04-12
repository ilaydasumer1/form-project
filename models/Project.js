const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  youAre: {
    type: String,
    enum: ['Software Developer', 'Industrial Engineer', 'Professional Photographer', 'Web Designer', 'Graphic Artist', 'Other'],
    required: true
  },
  youHave: {
    type: String,
    enum: ['Idea', 'Company', 'Budget', 'Worker', 'Other'],
    required: true
  },
  typeOfProject: {
    type: String,
    enum: ['Digital Branding', 'Professional Photography', 'Web Design', 'Mobile App Development', 'Digital Marketing', 'Other'],
    required: true
  },
  budget: {
    type: String, // Budget, kullanıcıdan string olarak bir değer alabilir. Sayısal bir değer istiyorsanız type'ı Number yapabilirsiniz.
    required: false // Eğer bütçe zorunlu bir alan değilse required'ı kaldırabilirsiniz.
  },
});

module.exports = mongoose.model('Project', projectSchema);
