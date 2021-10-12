const express = require('express')
const path = require('path')
const generatePassword = require('password-generator')
const cors = require('cors')

const itemsRoutes = require('../routes/items-route')
const businessRoutes = require('../routes/business-route')
const usersRoutes = require('../routes/users-route')
// const authorizesRoutes = require('../routes/authorizes-route')

const loader = async (app) => {
  app.use(express.json())

  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, '../client/build')))

  app.use('/api/items', itemsRoutes)
  app.use('/api/businesses', businessRoutes)
  app.use('/api/users', usersRoutes)
  // app.use('/api/authorize', authorizesRoutes)

  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get('*', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })

  app.enable('trust proxy')
  app.use(cors())

  // ...More middlewares

  return app
}

module.exports = loader
