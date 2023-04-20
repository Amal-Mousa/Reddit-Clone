const bcrypt = require('bcrypt');
const ms = require('ms');
const { signupQuery, getUserByEmail } = require('../../database');
const { signupSchema, signToken, CustomError, signinSchema } = require('../../utils');

const signupController = (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

  signupSchema.validateAsync(req.body, { abortEarly: false })
    .then((usersData) => getUserByEmail(usersData.email))
    .then((usersData) => {
      if (usersData.rowCount > 0) {
        throw new CustomError(401, 'this email already exist')
      }
    })
    .then(() => {
      return bcrypt.hash(password, 12)
        .then((hash) => ({ username, email, password: hash }))
        .then((data) => signupQuery(data))
        .then((data) => data.rows[0])
        .then((data) => {
          req.user = data;
          return signToken(data, { expiresIn: '30d' })
            //* store token in cookie and send json that the user created successfully and return the user data 
            .then((token) => {
              res
                .cookie('token', token, { httpOnly: true, maxAge: ms('1d') })
                .status(201)
                .json(
                  {
                    error: false,
                    data: { message: 'User Created Successfully', rows: req.user }
                  })
            })
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => next(err));
};

// get data and compare password and store token
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
    //* return boolean value
    .then((isMatched) => {
      if (!isMatched) {
        throw new CustomError(400, 'Invalid Email or Password')
      }

    })
    .then(() => {
      const { id, username, email } = req.user
      //* return token to store it in the cookie
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

module.exports = { signupController, signinController, logoutController };
