require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRouter = require('./routers/index');
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use('/api', taskRouter);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB:', error));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
