const { addPostsQuery } = require('../../database');
const { addPostSchema } = require('../../utils');

const addPostController = (req, res, next) => {
  const { title, content, image, user_id } = req.body;

  addPostSchema.validateAsync({ title, content, image, user_id }, { abortEarly: false })
    .then(({ title, content, image, user_id }) => addPostsQuery({ title, content, image, user_id }))
    .then((newPost) => {
      res.status(201).json({
        error: false,
        data: {
          message: newPost.rows
        }
      })
    })
    .catch((err) => next(err));
};

module.exports = { addPostController };
