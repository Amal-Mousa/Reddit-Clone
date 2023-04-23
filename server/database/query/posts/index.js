const { getPostsQuery } = require('./getPosts');
const { addPostsQuery } = require('./addPost');
const { deletePostQuery } = require('./deletePost');
const { getPostByIdQuery } = require('./getPostById');

module.exports = { getPostsQuery, addPostsQuery, deletePostQuery, getPostByIdQuery };
