const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);

module.exports = app;
