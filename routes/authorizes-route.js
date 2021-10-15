const express = require('express')

const authorizesController = require('../controllers/authorizes-controller')

const router = express.Router()

// register
router.post('/', authorizesController.register)

// login
router.post('/login', authorizesController.login)

// verify auth login
router.get('/welcome', authorizesController.welcome)

module.exports = router
