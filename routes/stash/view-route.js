const express = require('express')
const authorizesController = require('../../controllers/authorizes-controller')
const router = express.Router()
router.get('/user', authorizesController.checkUser)
module.exports = router
