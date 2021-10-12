const mongoose = require('mongoose')
const config = require('../config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

const loader = async () => {
  const connection = await mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  console.log('Connected to mongodb')

  return connection.connection.db
}

module.exports = loader
