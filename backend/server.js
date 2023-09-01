const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// middleware to handle req data: raw json and urlencoded body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const goalApiRoutes = require('./routes/goalRoutes');
app.use('/api/goals', goalApiRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
