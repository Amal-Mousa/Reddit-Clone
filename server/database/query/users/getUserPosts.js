const { connection } = require('../../config');

const getUserPostsQuery = (id) => {
  const sql = {
    text:
      `SELECT post.id AS post_id, post.user_id, users.username, 
      post.created_at, post.title ,post.content, post.image, 
      SUM(CASE WHEN votes.type = 1 THEN 1 ELSE 0 END) AS upVotes,
      SUM(CASE WHEN votes.type = -1 THEN 1 ELSE 0 END) AS downVotes
      FROM posts post
      JOIN users ON users.id = post.user_id
      LEFT JOIN votes ON votes.post_id = post.id
      WHERE users.id = $1
      GROUP BY post.id, users.username
      ORDER BY upVotes DESC;`,
    values: [id]
  };
  return connection.query(sql);
}

module.exports = { getUserPostsQuery };
