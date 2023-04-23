const { getPostByIdController } = require('./getPostById');
const { getPostsController } = require('./getPosts');
const { addPostController } = require('./addPost');
const { deletePostController } = require('./deletePost');

module.exports = { getPostByIdController, getPostsController, addPostController, deletePostController };
