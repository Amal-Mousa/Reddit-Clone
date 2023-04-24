const { connection } = require('../../config');

const addVoteQuery = ({ type, user_id, post_id }) => {
  const sql = {
    text: 'INSERT INTO votes(type, user_id, post_id) VALUES ($1,$2,$3) RETURNING *;',
    values: [type, user_id, post_id]
  }
  return connection.query(sql);
};

module.exports = { addVoteQuery };
