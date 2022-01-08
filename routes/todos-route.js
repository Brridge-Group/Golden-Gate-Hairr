const express = require('express')

const todosController = require('../controllers/todos-controller')

const router = express.Router()

//**greyed out routes after each route should be used once using moderator and/or admin roles**

// Get All Todos
router.get('/', todosController.getTodos)
// router.get(
//   '/',
//   todosController.allowIfLoggedin,
//   todosController.grantAccess('readAny', 'profile'),
//   todosController.getTodos
// )

// Get a Todo
// router.get('/:id', todosController.getTodo)
// router.get('/:id', todosController.allowIfLoggedin, todosController.getTodo)

//Create new Todo
router.post('/', todosController.createTodo)

//Update Todo
// router.patch('/:id', todosController.updateTodo)
// router.patch(
//   '/:id',
//   todosController.allowIfLoggedin,
//   todosController.updateTodo
// )

//Delete Todo
// router.delete('/:id', todosController.deleteTodo)
// router.delete(
//   '/:id',
//   usersController.allowIfLoggedin,
//   usersController.deleteTodo
// )

module.exports = router
