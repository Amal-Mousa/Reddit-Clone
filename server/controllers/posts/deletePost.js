const { deletePostQuery } = require('../../database');
const { getPostByIdQuery } = require('../../database');
const { CustomError } = require('../../utils');

const deletePostController = (req, res, next) => {
  const { id } = req.params

  getPostByIdQuery(id)
    .then((post) => {
      if (!post.rowCount) {
        throw new CustomError(404, 'Post Not Found')
      }
      return post.rows[0]
    })
    // .then((post) => console.log(post.user_id, req.user)) //! 
    .then(() => deletePostQuery(id))
    .then(() => res.json({
      error: false,
      data: {
        message: 'post delete successfully'
      }
    }))
    .catch((err) => next(err))
};

module.exports = { deletePostController };

