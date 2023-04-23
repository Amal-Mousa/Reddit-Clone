const { connection } = require('../../config');

const addPostsQuery = ({ title, content, image, user_id }) => {
  const sql = {
    text: `INSERT INTO posts (title, content, image, user_id) values ($1, $2, $3, $4) RETURNING id, title, content, image, user_id;`,
    values: [title, content, image, user_id]
  }
  return connection.query(sql);
}

module.exports = { addPostsQuery };
