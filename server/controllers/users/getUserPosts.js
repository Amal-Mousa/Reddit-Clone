const { getUserPostsQuery } = require('../../database');

const getUserPostsController = (req, res, next) => {
  const { id } = req.params;

  getUserPostsQuery(id)
    .then((posts) => {
      res.json({
        error: false,
        data: {
          message: posts.rows,
        }
      })
    })
    .catch((err) => next(err));
};

module.exports = { getUserPostsController }