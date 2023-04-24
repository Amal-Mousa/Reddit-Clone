const bcrypt = require('bcrypt');
const ms = require('ms');
const { getUserByEmail } = require('../../database');
const { signToken, CustomError, signinSchema } = require('../../utils');


const signinController = (req, res, next) => {
  const { email, password } = req.body;

  signinSchema.validateAsync(req.body, { abortEarly: false })
    .then((userData) => getUserByEmail(userData.email))
    .then((userData) => {
      if (userData.rowCount === 0) {
        throw new CustomError(400, 'Invalid Email or Password')
      }
      req.user = userData.rows[0]
      return bcrypt.compare(password, userData.rows[0].password)
    })
    .then((isMatched) => {
      if (!isMatched) {
        throw new CustomError(400, 'Invalid Email or Password')
      }
    })
    .then(() => {
      const { id, username, email } = req.user
      return signToken({ id, username, email }, { expiresIn: '30d' })
    })
    .then((token) => {
      res
        .cookie('token', token, { httpOnly: true, maxAge: ms('1d') })
        .json({
          error: false,
          data: {
            message: 'User Logged In successfully',
            user: req.user
          }
        })
    })
    .catch((err) => next(err))
};


module.exports = { signinController };
