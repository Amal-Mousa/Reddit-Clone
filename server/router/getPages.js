const getPagesRouter = require('express').Router();
const path = require('path');

getPagesRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "views", "index.html"));
});


getPagesRouter.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "views", "signup.html"));
});

getPagesRouter.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "views", "login.html"));
});

getPagesRouter.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "views", "profile.html"));
});

getPagesRouter.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "views", "home.html"));
});

getPagesRouter.get('/addPost', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "views", "addPost.html"));
});

module.exports = getPagesRouter;
