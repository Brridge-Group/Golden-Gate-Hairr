const express = require('express')
const path = require('path')
const cors = require('cors')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')

const usersRoutes = require('../routes/users-route')
const reviewsRoutes = require('../routes/reviews-route')

// Require Routes
const businessesRoutes = require('../routes/businesses-route')
const featuresRoutes = require('../routes/features-route')
const servicesRoutes = require('../routes/services-route')
const authorizesRoutes = require('../routes/authorizes-route')

const loader = async app => {
  app.use(express.json())

  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, '../client/build')))

  app.use('/api/users', usersRoutes)
  app.use('/api/businesses', businessesRoutes)
  app.use('/api/features', featuresRoutes)
  app.use('/api/services', servicesRoutes)
  app.use('/api/authorize', authorizesRoutes)
  app.use('/api/reviews', reviewsRoutes)

  app.use('/api', expressJwt({ secret: process.env.TOKEN_KEY, algorithms: ['HS256'] }))

  app.use(bodyParser.urlencoded({ extended: true }))

  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get('*', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })

  app.enable('trust proxy')
  app.use(cors())

  //following from bob zirolls tutorial https://coursework.vschool.io/token-auth-with-jwts-part-1/

  // Make the app use the express-jwt authentication middleware on anything starting with "/api"
  // We'll give expressJwt a config object with a secret and a specified algorithm

  // Add `/api` before your existing `app.use` of the todo routes.
  // This way, it must go through the express-jwt middleware before
  // accessing any todos, making sure we can reference the "currently
  // logged-in user" in our todo routes.
  // app.use("/api/todos", require("./routes/todo"));

  // ...More middlewares

  return app
}

module.exports = loader
