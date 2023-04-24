const { addPostsQuery } = require('../../database');
const { addPostSchema } = require('../../utils');

const addPostController = (req, res, next) => {
  const { id: user_id } = req.user;
  const { title, content, image } = req.body;
  addPostSchema.validateAsync({ title, content, image, user_id }, { abortEarly: false })
    .then((validated) => addPostsQuery(validated))
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
