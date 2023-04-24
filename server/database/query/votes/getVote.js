const { connection } = require('../../config');

const getVoteQuery = ({ post_id, user_id }) => {
  const sql = {
    text: 'SELECT * FROM votes WHERE post_id=$1 AND user_id =$2;',
    values: [post_id, user_id]
  };
  return connection.query(sql);
};

module.exports = { getVoteQuery };

