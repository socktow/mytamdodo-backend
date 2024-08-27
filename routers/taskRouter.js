const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Create a new task
router.post('/tasks', async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      // You might want to ensure that Status is set explicitly if required, otherwise it will default to false
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

// Read all tasks
router.get('/tasks', async (req, res) => {
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

// Read a task by ID
router.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send({
      Id: task.Id,
      TextTask: task.TextTask,
      DateTime: task.DateTime,
      Status: task.Status
    }); // Include the new field in the response
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a task by ID
router.patch('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!task) {
      return res.status(404).send();
    }
    res.send({
      Id: task.Id,
      TextTask: task.TextTask,
      DateTime: task.DateTime,
      Status: task.Status
    }); // Include the new field in the response
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a task by ID
router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send({
      Id: task.Id,
      TextTask: task.TextTask,
      DateTime: task.DateTime,
      Status: task.Status
    }); // Include the new field in the response
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
