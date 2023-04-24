const votesRouter = require('express').Router();
const { checkAuth } = require('../middlewares');
const { checkPostPresence } = require('../middlewares');
const { voteController } = require('../controllers');

votesRouter.post('/votes/:post_id', checkAuth, voteController);

module.exports = votesRouter;
