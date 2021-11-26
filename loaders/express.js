const express = require('express')
const path = require('path')
const cors = require('cors')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser');


const businessRoutes = require('../routes/business-route')
const usersRoutes = require('../routes/users-route')
const authorizesRoutes = require('../routes/authorizes-route')

const loader = async (app) => {
  app.use(express.json())

  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, '../client/build')))

  app.use('/api/businesses', businessRoutes)
  app.use('/api/users', usersRoutes)
  app.use('/api/authorize', authorizesRoutes)
  app.use(
    '/api',
    expressJwt({ secret: process.env.TOKEN_KEY, algorithms: ['HS256'] })
  )
  app.use(bodyParser.urlencoded({ extended: true }));


  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get('*', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })

  app.enable('trust proxy')
  app.use(cors())

  // near the top with the other imports

  // Make the app use the express-jwt authentication middleware on anything starting with "/api"
  // We'll give expressJwt a config object with a secret and a specified algorithm

  // Add `/api` before your existing `app.use` of the todo routes.
  // This way, it must go through the express-jwt middleware before
  // accessing any todos, making sure we can reference the "currently
  // logged-in user" in our todo routes.
  // app.use("/api/todo", require("./routes/todo"));

  // ...More middlewares

  return app
}

module.exports = loader
