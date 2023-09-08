const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB();

const app = express();

// middleware to handle req data: raw json and urlencoded body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const goalApiRoutes = require('./routes/goalRoutes');
app.use('/api/goals', goalApiRoutes);

// custom err handler work with express-async-handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
