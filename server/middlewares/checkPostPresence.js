const { getPostByIdQuery } = require('../database');
const { CustomError } = require('../utils');

const checkPostPresence = (req, res, next) => {
  const { id } = req.params;

  getPostByIdQuery(id)
    .then((post) => {
      if (!post.rowCount) {
        throw new CustomError(404, 'Post Not Found');
      }
      next()
    })
    .catch((err) => next(err))
}

module.exports = { checkPostPresence };