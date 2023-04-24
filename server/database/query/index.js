const { signupQuery, getUserByEmail } = require('./auth');
const { getPostsQuery, addPostsQuery, deletePostQuery, getPostByIdQuery } = require('./posts');
const { getUserByIdQuery, getUserPostsQuery } = require('./users');
const { getVoteQuery, addVoteQuery, deleteVoteQuery } = require('./votes');

module.exports = {
  signupQuery,
  getUserByEmail,
  getPostsQuery,
  addPostsQuery,
  deletePostQuery,
  getPostByIdQuery,
  getUserByIdQuery,
  getUserPostsQuery,
  getVoteQuery,
  addVoteQuery,
  deleteVoteQuery
};
