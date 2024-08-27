const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  Id: {
    type: Number,
    required: false,
  },
  TextTask: {
    type: String,
    required: true,
  },
  DateTime: {
    type: Date,
    default: Date.now,
  },
  Status: { // Add the Status field
    type: Boolean,
    default: false, // Set the default value to false
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
