const { sign, verify, decode } = require('jsonwebtoken');
require('dotenv').config();

const { SECRET_KEY } = process.env;

// (payload, secretkey, callback)
const signToken = (payload) => {
  return new Promise((resolve, reject) => {
    sign(payload, SECRET_KEY, (err, token) => {
      if (err) reject(err)
      else resolve(token)
    });
  });
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    verify(token, SECRET_KEY, (err, decode) => {
      if (err) reject(err)
      else resolve(decode)
    });
  });
};

module.exports = { signToken, verifyToken }