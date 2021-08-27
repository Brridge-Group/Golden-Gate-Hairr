const express = require('express')

const usersController = require('../controllers/users-controller')

const router = express.Router()

// Get All Items
router.get('/', usersController.getUsers)

// Get an Item
router.get('/:id', usersController.getUser)

//Create new item
router.post('/', usersController.createUser)

//Update item
// router.patch('/:id', itemsController.updateItem)

//Delete item
router.delete('/:id', usersController.deleteUser)

module.exports = router
