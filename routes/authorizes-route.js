const express = require('express')

const authorizesController = require('../controllers/authorizes-controller')

const router = express.Router()

// signup
router.post('/signup', authorizesController.signup)

// login
router.post('/login', authorizesController.login)

module.exports = router
