const { connection } = require('../../config');

const deleteVoteQuery = (id) => {
  const sql = {
    text: 'DELETE FROM votes WHERE id=$1 RETURNING type;',
    values: [id]
  };
  return connection.query(sql);
};

module.exports = { deleteVoteQuery };
