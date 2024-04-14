const Joi = require('joi');

const someRequired = 'Some required fields are missing';

const schemaLogin = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'any.required': someRequired,
      'string.email': '"email" must be a valid email',
    }),
  password: Joi.string().min(6).required()
    .messages({
      'any.required': someRequired,
      'string.min': '"password" length must be at least 6 characters long',
    }),
});

const schemaUser = Joi.object({
  displayName: Joi.string().min(8).required()
    .messages({
      'any.required': '"displayName" Not Found',
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
  email: Joi.string().email().required()
    .messages({
      'any.required': '"email" Not Found',
      'string.email': '"email" must be a valid email',
    }),
  password: Joi.string().min(6).required()
    .messages({
      'any.required': '"password" Not Found',
      'string.min': '"password" length must be at least 6 characters long',
    }),
});

module.exports = { schemaUser, schemaLogin };
