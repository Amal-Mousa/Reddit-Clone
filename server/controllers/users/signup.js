const bcrypt = require('bcrypt');
const ms = require('ms');
const { signupQuery, getUserByEmail } = require('../../database');
const { signupSchema, signToken, CustomError } = require('../../utils');

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
    }).then((hash) => ({ username, email, password: hash }))
    .then((data) => signupQuery(data))
    .then((data) => data.rows[0])
    .then((data) => {
      req.user = data
      // console.log(req.user);
      return signToken(data, { expiresIn: '30d' })
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
    .catch((err) => next(err));
};


module.exports = { signupController };
