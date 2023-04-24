const router = require('express').Router();
const authRouter = require('./authRouter');
const postsRouter = require('./postsRouter');
const usersRouter = require('./usersRouter.js');

router.use(authRouter);
router.use(postsRouter);
router.use(usersRouter);

module.exports = router;