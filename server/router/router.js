const router = require('express').Router();
const { signupController, signinController, logoutController } = require('../controllers');

// user controllers
router.post('/signup', signupController);
router.post('/signin', signinController);
router.get('/logout', logoutController);



module.exports = router;
