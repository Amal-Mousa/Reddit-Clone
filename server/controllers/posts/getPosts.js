const { getPostsQuery } = require('../../database');

const getPostsController = (req, res, next) => {
  getPostsQuery()
    .then((posts) => {
      res.json({
        error: false,
        data: {
          posts: posts.rows,
        }
      })
    })
    .catch((err) => next(err));
};

module.exports = { getPostsController };
