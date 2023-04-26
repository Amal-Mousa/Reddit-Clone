const authRouter = require('express').Router();
const path = require('path')
const { signupController, signinController, logoutController } = require('../controllers');


//* auth controllers
authRouter.post('/signup', signupController);
authRouter.post('/signin', signinController);
authRouter.post('/logout', logoutController);

module.exports = authRouter;
