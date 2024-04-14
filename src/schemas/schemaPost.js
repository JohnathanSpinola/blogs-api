const Joi = require('joi');

const someRequired = 'Some required fields are missing';

const schemaPost = Joi.object({
  title: Joi.string().required()
    .messages({
      'any.required': someRequired,
      'string.empty': someRequired,
    }),
  content: Joi.string().required()
    .messages({
      'any.required': someRequired,
    }),
  categoryIds: Joi.array().required()
    .messages({
      'any.required': someRequired,
    }),
});

const schemaUpdatePost = Joi.object({
  title: Joi.string().required()
    .messages({
      'any.required': someRequired,
      'string.empty': someRequired,
    }),
  content: Joi.string().required()
    .messages({
      'any.required': someRequired,
    }),
});

module.exports = { schemaPost, schemaUpdatePost };