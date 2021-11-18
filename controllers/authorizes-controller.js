const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const User = require('../models/user')
const db = require('../models')
const User = db.user
const Role = db.role

const signup = async (req, res) => {
  try {
    // Get user input
    const { firstName, lastName, email, password, isOwner } = req.body
    // Validate user input
    if (!(email && password && firstName && lastName)) {
      res.status(400).send('All input is required')
    }
    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email })

    if (oldUser) {
      return res.status(409).send('User Already Exists. Please Login')
    }
    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10)

    // Create user in our database
    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
      isOwner,
    })

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};


    const token = jwt.sign(user.toObject(), process.env.TOKEN_KEY)
    return res.status(201).send({ success: true, user: user.toObject(), token })
  } catch (err) {
    console.log(err)
  }
  // Our register logic ends here
}

const login = async (req, res) => {
  debugger
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
      const token = jwt.sign(user.toObject(), process.env.TOKEN_KEY)

      // Send the token back to the client app.
      return res.send({ token: token, user: user.toObject(), success: true })
    }
    res.status(400).send('Invalid Credentials')
  } catch (err) {
    console.log(err)
  }
}
exports.signup = signup
exports.login = login