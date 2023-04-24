const { signupQuery, getUserByEmail } = require('./auth');
const { getPostsQuery, addPostsQuery, deletePostQuery, getPostByIdQuery } = require('./posts');
const { getUserByIdQuery, getUserPostsQuery } = require('./users');

module.exports = {
  signupQuery,
  getUserByEmail,
  getPostsQuery,
  addPostsQuery,
  deletePostQuery,
  getPostByIdQuery,
  getUserByIdQuery, 
  getUserPostsQuery
};
