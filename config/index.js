const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

const config = {
  port: process.env.PORT,
  databaseURL: process.env.MONGODB_URI,
}

module.exports = config;