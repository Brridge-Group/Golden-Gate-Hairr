// const mongoose = require('mongoose')

// // importing user context
// const User = require('./model/user')

// // Register
// app.post('/register', async (req, res) => {
//   // Our register logic starts here
//   try {
//     // Get user input
//     const { firstName, lastName, email, password } = req.body

//     // Validate user input
//     if (!(email && password && firstName && lastName)) {
//       res.status(400).send('All input is required')
//     }

//     // check if user already exist
//     // Validate if user exist in our database
//     const oldUser = await User.findOne({ email })

//     if (oldUser) {
//       return res.status(409).send('User Already Exist. Please Login')
//     }

//     //Encrypt user password
//     encryptedPassword = await bcrypt.hash(password, 10)

//     // Create user in our database
//     const user = await User.create({
//       firstName,
//       lastName,
//       email: email.toLowerCase(), // sanitize: convert email to lowercase
//       password: encryptedPassword,
//     })

//     // Create token
//     const token = jwt.sign(
//       { user_id: user._id, email },
//       process.env.TOKEN_KEY,
//       {
//         expiresIn: '2h',
//       }
//     )
//     // save user token
//     user.token = token

//     // return new user
//     res.status(201).json(user)
//   } catch (err) {
//     console.log(err)
//   }
//   // Our register logic ends here
// })

// // ...

// // Login
// app.post('/login', (req, res) => {
//   // our login logic goes here
// })
