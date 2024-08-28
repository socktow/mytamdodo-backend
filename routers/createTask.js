const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Create a new task
router.post('/', async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
    });
    await task.save();
    res.status(201).send({
      TextTask: task.TextTask,
      Status: task.Status,
      DateTime: task.DateTime,
    }); // Only send the relevant fields
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
