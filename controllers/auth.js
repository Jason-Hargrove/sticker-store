// auth.js: To create the methods to authenticate users.
require('dotenv').config()
const bcrypt = require('bcryptjs'); // Had to install.
const crypto = require('crypto'); // Comes with node.js.
const jwt = require('jsonwebtoken'); // Had to install.
const User = require('../models/user.js')


// Hashing function.
const hash = (password) => {
  const levelOne = crypto.createHmac('sha256', process.env.SECRET)
              .update(password)
              .digest('hex')
              .split('')
              .reverse()
              .join('j')
  return crypto.createHmac('sha256', proess.env.SECRET)
              .update(levelOne)
              .digest('hex')
              .split('')
              .reverse()
              .join('')
}

module.exports.hash = hash


// Register Users.
const registerService = async (req, res) => {
  console.log(req.body)
  const hashedPassword = hash(req.body.password)
  console.log('hashedPassword:', hashedPassword)
  req.body.password = bcrypt.hashSync(hashedPassword, bcrypt.genSaltSync(10))
  console.log(req.body)

  try {
    // Create user.
    const createdUser = await User.create(req.body)
    // Create token.
    const token = jwt.sign({
      username: createdUser.username
    }, SECRET)
    // Send the token.
    res.status(200).json({ user: createdUser, token })
  } catch (err) {
      console.error(err)
      res.status(400).json({ msg: err.message })
  }
}

module.exports.register = registerService

// Verification.

// Login Users.



// Header authenticate.

// JSON authenticate.
