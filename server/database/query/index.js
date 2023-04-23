const { signupQuery, getUserByEmail } = require('./users');
const { getPostsQuery, addPostsQuery, deletePostQuery, getPostByIdQuery } = require('./posts');

module.exports = { signupQuery, getUserByEmail, getPostsQuery, addPostsQuery, deletePostQuery, getPostByIdQuery };
