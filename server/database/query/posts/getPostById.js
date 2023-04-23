const { connection } = require('../../config');

const getPostByIdQuery = (id) => {
  const sql = {
    text: 'SELECT * FROM posts WHERE id=$1;',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = { getPostByIdQuery };