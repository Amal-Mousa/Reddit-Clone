const postsRouter = require('express').Router();
const { checkAuth } = require('../middlewares');
const { getPostByIdController, getPostsController, addPostController, deletePostController } = require('../controllers');

postsRouter.get('/posts/:id', getPostByIdController);
postsRouter.get('/posts', getPostsController);
postsRouter.post('/posts', checkAuth, addPostController);
postsRouter.delete('/posts/:id', checkAuth, deletePostController);

module.exports = postsRouter;
