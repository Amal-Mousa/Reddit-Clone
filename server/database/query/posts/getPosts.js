const { connection } = require('../../config');

const getPostsQuery = () => {
  const sql = {
    text:
      `SELECT post.id, post.created_at, post.title, post.content, post.image, post.user_id, users.username,
      SUM(CASE WHEN votes.type = 1 THEN 1 ELSE 0 END) AS upVotes,
      SUM(CASE WHEN votes.type = -1 THEN 1 ELSE 0 END) AS downVotes
      FROM posts post
      JOIN users ON users.id = post.user_id
      LEFT JOIN votes ON votes.post_id = post.id
      GROUP BY post.id, users.username
      ORDER BY upVotes DESC;`,
  };
  return connection.query(sql);
};

module.exports = { getPostsQuery };
