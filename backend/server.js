const path = require('path');
const express = require('express');
const colors = require('colors');
require('dotenv').config();

const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');

//connect to mongoDB
connectDB();

const app = express();

// middleware to handle req data: raw json and urlencoded body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const goalApiRoutes = require('./routes/goalRoutes');
app.use('/api/goals', goalApiRoutes);
const userApiRoutes = require('./routes/userRoutes');
app.use('/api/users', userApiRoutes);

//Serve frontend
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  // for any routes aside for the api routes - load index.html
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  // handle in case it isn't production
  app.get('/', (req, res) => res.send('Please set to production'));
}

// custom err handler work with express-async-handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
