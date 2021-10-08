// const mongoose = require('mongoose')
// // const asyncHandler = require('express-async-handler')

// const User = require('../models/user')

// const getUsers = async (req, res, next) => {
//   let users
//   try {
//     users = await User.find()
//   } catch (err) {
//     const error = new HttpError("Couldn't retrieve users!" + err, 500)
//     return next(error)
//   }

//   res.json({
//     users: users.map((user) => user.toObject({ getters: true })),
//   })
// }

// const registerUser = asyncHandler(async (req, res, next) => {
//   console.log(req.body)
//   const { firstName, lastName, email, password, password2 } = req.body

//   const userExists = await User.findOne({ email })

//   if (userExists) {
//     req.status(400)
//     throw new Error('user already exists')
//   }

//   const user = await User.create({
//     firstName,
//     lastName,
//     email,
//     password,
//     password2,
//   })
//   // const createdUser = new User({
//   //   firstName,
//   //   lastName,
//   //   email,
//   //   password,
//   //   password2,
//   // })
//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       email: user.email,
//       password: user.password,
//       password2: user.password2,
//     })
//   } else {
//     res.statue(400)
//     throw new Error('error occurred')
//   }

//   // try {
//   //   await createdUser.save()
//   // } catch (err) {
//   //   const error = new HttpError('Creating user failed, please try again.', 500)
//   //   return next(error)
//   // }

//   // res.status(201).json({ user: createdUser })
// })

// const updateUser = async (req, res, next) => {
//   const userId = req.params.id

//   console.log(req.body)
//   const { firstName, lastName, email, password, password2 } = req.body

//   let user
//   try {
//     user = await user.findById(userId)
//   } catch (err) {
//     return next(err)
//   }

//   user.firstName = firstName
//   user.lastName = lastName
//   user.email = email
//   user.password = password
//   user.password2 = password2

//   try {
//     const result = await user.save()
//   } catch (err) {
//     return next(err)
//   }

//   res.status(200).json({ user: user.toObject({ getters: true }) })
// }

// const getUser = async (req, res, next) => {
//   let user

//   const userId = req.params.id

//   try {
//     user = await User.findById(userId)
//   } catch (err) {
//     return next(err)
//   }

//   res.json({ user })
// }

// const deleteUser = async (req, res, next) => {
//   let user

//   const userId = req.params.id

//   try {
//     user = await User.findById(userId)
//   } catch (err) {
//     return next(err)
//   }

//   try {
//     if (user) {
//       await user.remove()
//     }
//   } catch (err) {
//     return next(err)
//   }

//   res.json({ message: 'Deleted successfully' })
// }

// exports.getUsers = getUsers
// exports.registerUser = createUser
// exports.updateUser = updateUser
// exports.getUser = getUser
// exports.deleteUser = deleteUser
