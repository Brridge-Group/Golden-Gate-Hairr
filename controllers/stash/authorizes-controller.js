const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const auth = require('../middleware/auth')

const register = async (req, res) => {
  try {
    // Get user input
    const { firstName, lastName, email, password } = req.body

    // Validate user input
    if (!(email && password && firstName && lastName)) {
      res.status(400).send('All input is required')
    }
    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email })

    if (oldUser) {
      return res.status(409).send('User Already Exist. Please Login')
    }
    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10)

    // Create user in our database
    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    })
    // Create token
    const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
      expiresIn: '2h',
    })
    // Create token
    // const token = jwt.sign(
    //   { user_id: user._id, email },
    //   process.env.TOKEN_KEY,
    //   {
    //     expiresIn: '2h',
    //   }
    // )
    // save user token
    console.log(token)
    return res.status(201).send({ success: true, user, token })
    // user.token = token

    // return new user
    // res.status(201).json(user)
  } catch (err) {
    console.log(err)
  }
  // Our register logic ends here
}

const login = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body
    // Validate user input
    if (!(email && password)) {
      res.status(400).send('All input is required')
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      // const token = jwt.sign(
      //   { user_id: user._id, email },
      //   process.env.TOKEN_KEY,
      //   {
      //     expiresIn: '2h',
      //   }
      // )
      // // save user token
      // user.token = token
      // // user
      // res.status(200).json(user)

      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_KEY)
      const cookie = req.cookies.token
      if (cookie == undefined) {
        res.cookie('token', token, { httpOnly: true })
      }
      return res.status(200).json({ message: 'login success' })

      // res.status(200).send({
      //   id: user._id,
      //   password: user.password,
      //   email: user.email,
      //   accessToken: token,
      // })
    }
    res.status(400).send('Invalid Credentials')
  } catch (err) {
    console.log(err)
  }
}
const welcome =
  (auth,
  (req, res) => {
    res.status(200).send('Welcome 🙌 ')
  })

const checkToken = (req, res) => {
  console.log('in check token', req.cookies.token)
  const req_token = req.cookies.token
  let auth = false
  if (!req_token) {
    return res.status(200).json({ message: 'please login' })
  }
  try {
    if (!jwt.verify(req_token, process.env.TOKEN_KEY)) throw 'token not valid'
    else {
      auth = true
    }
  } catch (err) {
    console.log('invalid token')
  }
  if (!auth) {
    return res.status(400).json({ message: 'token verification failed' })
  } else {
    const data = jwt.verify(req_token, process.env.TOKEN_KEY)
    User.findById(data._id).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: 'user not found',
        })
      }
      const { firstName, lastName, email, _id, createdDate, type } = user
      return res.status(200).json({
        user: {
          firstName,
          lastName,
          email,
          _id,
          createdDate,
          type,
        },
      })
    })
  }
}

// ...
exports.register = register
exports.login = login
exports.welcome = welcome
exports.checkToken = checkToken
