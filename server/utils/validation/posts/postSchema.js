const Joi = require('joi');

// title, content, image, user_id
const addPostSchema = Joi.object({
  title: Joi.string().min(3).max(250).required(),
  content: Joi.string().min(10).max(600).required(),
  image: Joi.string().allow(null, ''),
  user_id: Joi.number().integer().required()
});

module.exports = { addPostSchema };
