const postsRouter = require('express').Router();
const { getPostsController } = require('../controllers');

postsRouter.get('/posts', getPostsController);

module.exports = postsRouter;
