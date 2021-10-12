const express = require('express')

const authorizesController = require('../controllers/authorizes-controller')

const router = express.Router()

// register
router.post('/', authorizesController.register)

// login
router.post('/:id', authorizesController.login)

module.exports = router
