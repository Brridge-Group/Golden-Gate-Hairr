const Todo = require('../models/todo1')

// const createTodo = (req, res, next) => {
//   const todo = new Todo(req.body)

//   // Set the user property of a todo to req.user._id (logged-in user's `_id` property)
//   // todo.user = req.user._id

//   // Same as before
//   todo.save((err, newTodo) => {
//     if (err) {
//       res.status(500)
//       return next(err)
//     }
//     return res.status(201).send(newTodo)
//   })
// }

const createTodo = async (req, res, next) => {
  console.log(req.body)
  const { todo } = req.body

  const newTodo = new Todo({
    todo,
  })
  // todo.user = req.user._id
  todo.user = req.user._id

  try {
    await newTodo.save()
  } catch (err) {
    const error = new HttpError('Creating todo failed, please try again.', 500)
    return next(error)
  }

  res.status(201).json({ todo: newTodo })
}

const getTodos = async (req, res, next) => {
  let todos
  try {
    todos = await Todo.find({ user: req.user._id }, (err, todos))
  } catch (error) {
    return next(error)
  }

  res.json({
    todos: todos.map(todo => todo.toObject({ getters: true })),
  })
}

exports.createTodo = createTodo
exports.getTodos = getTodos
