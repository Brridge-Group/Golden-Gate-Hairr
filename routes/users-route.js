const express = require('express')

const usersController = require('../controllers/users-controller')

const router = express.Router()

//**greyed out routes after each route should be used once using moderator and/or admin roles**

// Get All Users
router.get('/', usersController.getUsers)
// router.get(
//   '/',
//   usersController.allowIfLoggedin,
//   usersController.grantAccess('readAny', 'profile'),
//   usersController.getUsers
// )

// Get a User
router.get('/:id', usersController.getUser)
// router.get('/:id', usersController.allowIfLoggedin, usersController.getUser)

//Create new User
router.post('/', usersController.createUser)

//Update User
router.patch('/:id', usersController.updateUser)
// router.patch(
//   '/:id',
//   usersController.allowIfLoggedin,
//   usersController.updateUser
// )

//Delete User
router.delete('/:id', usersController.deleteUser)
// router.delete(
//   '/:id',
//   usersController.allowIfLoggedin,
//   usersController.deleteUser
// )

module.exports = router
