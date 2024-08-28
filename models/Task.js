const mongoose = require('mongoose');
const Counter = require('./Counter'); // Import the Counter model

const taskSchema = new mongoose.Schema({
  Id: {
    type: Number,
    required: false, // Remove the required constraint here
  },
  TextTask: {
    type: String,
    required: true,
  },
  DateTime: {
    type: Date,
    default: Date.now,
  },
  Status: {
    type: Boolean,
    default: false,
  },
});

// Pre-save hook to auto-increment the Id field
taskSchema.pre('save', async function(next) {
  if (this.isNew) {
    try {
      const counter = await Counter.findByIdAndUpdate(
        { _id: 'task_id' },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
      );
      this.Id = counter.sequence_value;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
