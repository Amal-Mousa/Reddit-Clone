const router = require('express').Router();
const { signupController } = require('../controllers');

router.post('/signup', signupController);

module.exports = router;
