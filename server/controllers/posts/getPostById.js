const { getPostByIdQuery } = require('../../database');
const { CustomError } = require('../../utils');

const getPostByIdController = (req, res, next) => {
  const { id } = req.params;

  getPostByIdQuery(id)
    .then((post) => {
      if (!post.rowCount) {
        throw new CustomError(404, 'Post Not Found');
      }
      return post.rows[0]
    })
    .then((post) => {
      res.json({
        error: false,
        data: {
          message: post
        }
      })
    })
    .catch((err) => next(err))
}

module.exports = { getPostByIdController };