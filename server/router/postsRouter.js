const postsRouter = require('express').Router();
const { getPostByIdController, getPostsController, addPostController, deletePostController } = require('../controllers');

postsRouter.get('/posts/:id', getPostByIdController);
postsRouter.get('/posts', getPostsController);
postsRouter.post('/posts', addPostController);
postsRouter.delete('/posts/:id', deletePostController);

module.exports = postsRouter;
