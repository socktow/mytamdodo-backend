const express = require('express');
const router = express.Router();

const createTaskRouter = require('./createTask');
const readTasksRouter = require('./readTasks');
const readTaskByIdRouter = require('./readTaskById');
const updateTaskRouter = require('./updateTask');
const deleteTaskRouter = require('./deleteTask');

router.use('/tasks', createTaskRouter);
router.use('/tasks', readTasksRouter);
router.use('/tasks', readTaskByIdRouter);
router.use('/tasks', updateTaskRouter);
router.use('/tasks', deleteTaskRouter);

module.exports = router;
