const Joi = require('joi');

const signupSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
  confirmPassword: Joi.ref('password'),
});

const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).pattern(/^[a-zA-Z0-9]{3,30}$/).required()
});

module.exports = { signupSchema, signinSchema };
