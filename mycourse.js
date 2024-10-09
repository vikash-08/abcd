const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  content: [{
    title: String,
    videoUrl: String,  // You can add other types of content like text, PDF, etc.
    duration: Number  // Duration in minutes or seconds
  }],

  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],

  duration: {
    type: Number,  // Total duration of the course
    default: 0
  }
});

module.exports = mongoose.model('Course', courseSchema);

