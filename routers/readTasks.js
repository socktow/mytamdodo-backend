const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Read all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks.map(task => ({
      Id: task.Id,
      TextTask: task.TextTask,
      DateTime: task.DateTime,
      Status: task.Status
    }))); // Map to include the new field
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
