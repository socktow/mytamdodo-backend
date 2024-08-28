const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Delete a task by ID
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ Id: req.params.id });
    if (!task) {
      return res.status(404).send(); // Return 404 if no task is found
    }
    res.send({
      Id: task.Id,
      TextTask: task.TextTask,
      DateTime: task.DateTime,
      Status: task.Status
    }); // Include the deleted task's fields in the response
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
