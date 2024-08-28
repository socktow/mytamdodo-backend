const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Update a task by ID
router.patch('/:id', async (req, res) => {
  try {
    const updates = req.body;
    const task = await Task.findOneAndUpdate({ Id: req.params.id }, updates, { new: true, runValidators: true });
    if (!task) {
      return res.status(404).send();
    }
    res.send({
      Id: task.Id,
      TextTask: task.TextTask,
      DateTime: task.DateTime,
      Status: task.Status
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
