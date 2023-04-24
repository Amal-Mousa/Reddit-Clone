const usersRouter = require('express').Router();
const { checkUserPresence } = require('../middlewares')
const { getUserByIdController, getUserPostsController } = require('../controllers');


usersRouter.get('/users/:id', getUserByIdController);
usersRouter.get('/userPosts/:id', checkUserPresence, getUserPostsController);

module.exports = usersRouter;
