const getPagesRouter = require('express').Router();
const path = require('path');

getPagesRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "views", "index.html"));
});


getPagesRouter.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "views", "html", "signup.html"));
});

getPagesRouter.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "views", "html", "login.html"));
});

getPagesRouter.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "views", "html", "profile.html"));
});

getPagesRouter.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "views", "html", "home.html"));
});

getPagesRouter.get('/addPost', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "views", "html", "addPost.html"));
});

module.exports = getPagesRouter;
