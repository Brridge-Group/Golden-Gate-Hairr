const express = require('express')
const { verifyToken } = require('../middlewares')

const usersController = require('../controllers/users-controller')

const router = express.Router()

// Get All Users
router.get('/', usersController.getUsers)

// Get a User
router.get('/:id', usersController.getUser)

//Create new User
router.post('/', usersController.createUser)

//Update User
router.patch('/:id', usersController.updateUser)

//Delete User
router.delete('/:id', usersController.deleteUser)

// router.get('/test/all', controller.allAccess)

// router.get('/test/user', [verifyToken], controller.userBoard)

module.exports = router
