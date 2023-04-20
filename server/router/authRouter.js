const authRouter = require('express').Router();
const { signupController, signinController, logoutController } = require('../controllers');

//* auth controllers
authRouter.post('/signup', signupController);
authRouter.post('/signin', signinController);
authRouter.get('/logout', logoutController);

module.exports = authRouter;
