const router = require('express').Router();
const authRouter = require('./authRouter');
const postsRouter = require('./postsRouter');
const usersRouter = require('./usersRouter');
const votesRouter = require('./votesRouter');

router.use(authRouter);
router.use(postsRouter);
router.use(usersRouter);
router.use(votesRouter);

module.exports = router;