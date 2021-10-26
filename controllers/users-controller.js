const mongoose = require('mongoose')

const User = require('../models/user')

const getUsers = async (req, res, next) => {
  let users
  try {
    users = await User.find()
  } catch (err) {
    const error = new HttpError("Couldn't retrieve users!" + err, 500)
    return next(error)
  }

  res.json({
    users: users.map((user) => user.toObject({ getters: true })),
  })
}

const createUser = async (req, res, next) => {
  console.log(req.body)
  const { firstName, lastName, email, password, password2, type, createdDate } =
    req.body

  const createdUser = new User({
    firstName,
    lastName,
    email,
    password,
    password2,
    type,
    createdDate,
  })

  try {
    await createdUser.save()
    console.log(createdUser._id)
  } catch (err) {
    const error = new HttpError('Creating user failed, please try again.', 500)
    return next(error)
  }

  res.status(201).json({ user: createdUser })
}

const updateUser = async (req, res, next) => {
  const userId = req.params.id

  console.log(req.body)
  const { firstName, lastName, email, password, password2 } = req.body

  let user
  try {
    user = await user.findById(userId)
  } catch (err) {
    return next(err)
  }

  user.firstName = firstName
  user.lastName = lastName
  user.email = email
  user.password = password
  user.password2 = password2

  try {
    const result = await user.save()
  } catch (err) {
    return next(err)
  }

  res.status(200).json({ user: user.toObject({ getters: true }) })
}

const getUser = async (req, res, next) => {
  let user

  const userId = req.params.id

  try {
    user = await User.findById(userId)
  } catch (err) {
    return next(err)
  }

  res.json({ user })
}

const deleteUser = async (req, res, next) => {
  let user

  const userId = req.params.id

  try {
    user = await User.findById(userId)
  } catch (err) {
    return next(err)
  }

  try {
    if (user) {
      await user.remove()
    }
  } catch (err) {
    return next(err)
  }

  res.json({ message: 'Deleted successfully' })
}

const allAccess = (req, res) => {
  res.status(200).send('Public Content.')
}

const userBoard = (req, res) => {
  res.status(200).send('User Content.')
}

// const adminBoard = (req, res) => {
//   res.status(200).send('Admin Content.')
// }

// const moderatorBoard = (req, res) => {
//   res.status(200).send('Moderator Content.')
// }

exports.getUsers = getUsers
exports.createUser = createUser
exports.updateUser = updateUser
exports.getUser = getUser
exports.deleteUser = deleteUser
exports.allAccess = allAccess
exports.userBoard = userBoard
