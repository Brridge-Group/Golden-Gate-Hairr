const mongoose = require('mongoose')
const config = require('../config')

const db = require('../models')
const Role = db.role

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

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save((err) => {
        if (err) {
          console.log('error', err)
        }

        console.log("added 'user' to roles collection")
      })

      new Role({
        name: 'owner',
      }).save((err) => {
        if (err) {
          console.log('error', err)
        }

        console.log("added 'owner' to roles collection")
      })

      new Role({
        name: 'admin',
      }).save((err) => {
        if (err) {
          console.log('error', err)
        }

        console.log("added 'admin' to roles collection")
      })

      new Role({
        name: 'moderator',
      }).save((err) => {
        if (err) {
          console.log('error', err)
        }

        console.log("added 'moderator' to roles collection")
      })
    }
  })
}

module.exports = loader
