require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/Task'); // Import your Task model
const taskRouter = require('./routers/taskRouter'); // Import your router

const app = express();
const port = process.env.PORT || 4000; // Sử dụng PORT từ biến môi trường
const cors = require('cors');
app.use(cors());
// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the task router
app.use('/api', taskRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
