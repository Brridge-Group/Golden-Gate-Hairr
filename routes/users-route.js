const express = require('express')

const itemsController = require('../controllers/users-controller')

const router = express.Router()

// Get All Items
router.get('/', itemsController.getUsers)

// Get an Item
router.get('/:id', itemsController.getUser)

//Create new item
router.post('/', itemsController.createUser)

//Update item
// router.patch('/:id', itemsController.updateItem)

//Delete item
router.delete('/:id', itemsController.deleteUser)

module.exports = router
