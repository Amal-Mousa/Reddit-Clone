const router = require('express').Router();
const authRouter = require('./authRouter');
const postsRouter = require('./postsRouter');

router.use(authRouter);
router.use(postsRouter);

module.exports = router;