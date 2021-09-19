const mongoose = require('mongoose')

const User = require('../models/user')

const getUsers = async (req, res, next) => {
  let users
  try {
    users = await User.find()
  } catch (error) {
    return next(error)
  }

  res.json({
    users: users.map((user) => user.toObject({ getters: true })),
  })
}

const createUser = async (req, res, next) => {
  console.log(req.body)
  const { firstName, lastName, email, password, password2, type } = req.body

  const createdUser = new User({
    firstName,
    lastName,
    email,
    password,
    password2,
    type,
  })

  try {
    await createdUser.save()
  } catch (error) {
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

exports.getUsers = getUsers
exports.createUser = createUser
exports.updateUser = updateUser
exports.getUser = getUser
exports.deleteUser = deleteUser
