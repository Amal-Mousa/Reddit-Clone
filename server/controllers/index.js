const { signupController, signinController, logoutController } = require('./users');
const { getPostsController } = require('./posts');

module.exports = { signupController, signinController, logoutController, getPostsController };
