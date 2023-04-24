const { signupController, signinController, logoutController } = require('./auth');
const { getPostByIdController, getPostsController, addPostController, deletePostController } = require('./posts');
const { getUserByIdController, getUserPostsController } = require('./users');

module.exports = {
  signupController,
  signinController,
  logoutController,
  getPostByIdController,
  getPostsController,
  addPostController,
  deletePostController,
  getUserByIdController,
  getUserPostsController
};
