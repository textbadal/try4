// backend/db/conn.js
/*
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/certificateDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connection established successfully');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
*/


const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables from the .env file

// Connect to MongoDB Atlas using the URI from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("Failed to connect to MongoDB Atlas", err));
