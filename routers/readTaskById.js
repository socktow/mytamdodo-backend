const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Read a task by ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findOne({ Id: req.params.id }); // Find by Id, not MongoDB _id
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
    res.status(500).send(error);
  }
});

module.exports = router;
