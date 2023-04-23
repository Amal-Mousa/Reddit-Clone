const { signupQuery, getUserByEmail } = require('./query');
const { getPostsQuery, addPostsQuery, deletePostQuery, getPostByIdQuery } = require('./query');

module.exports = { signupQuery, getUserByEmail, getPostsQuery, addPostsQuery, deletePostQuery, getPostByIdQuery };
