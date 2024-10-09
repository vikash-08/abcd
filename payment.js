const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['completed', 'pending', 'failed'],
    default: 'completed'
  },
  datePurchased: {
    type: Date,
    default: Date.now
  },
  amountPaid: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);

