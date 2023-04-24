const { connection } = require('../../config');

const signupQuery = (userData) => {
  const { username, email, password } = userData;
  const sql = {
    text: 'INSERT INTO users(username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
    values: [username, email, password],
  };
  return connection.query(sql);
};

const getUserByEmail = (email) => {
  const sql = {
    text: 'SELECT * FROM users WHERE email=$1',
    values: [email],
  };
  return connection.query(sql);
};

module.exports = { signupQuery, getUserByEmail };
