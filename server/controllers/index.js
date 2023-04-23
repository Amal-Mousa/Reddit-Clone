const { signupController, signinController, logoutController } = require('./users');
const { getPostByIdController, getPostsController, addPostController, deletePostController } = require('./posts');

module.exports = { signupController, signinController, logoutController, getPostByIdController, getPostsController, addPostController, deletePostController };
