const mongoose = require('mongoose');
const dotenv = require('dotenv');

// load env config
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
