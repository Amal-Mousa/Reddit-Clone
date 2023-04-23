const { connection } = require('../../config');

const deletePostQuery = (id) => {
  const sql = {
    text: 'DELETE FROM posts WHERE id=$1 RETURNING id;',
    values: [id]
  };
  return connection.query(sql);
};

module.exports = { deletePostQuery };