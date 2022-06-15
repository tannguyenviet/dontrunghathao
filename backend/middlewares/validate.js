const Joi = require('joi');

const { pick } = require('../utils/commonFunc');
const AppError = require("../utils/error/customError");


const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, Object.keys(validSchema));
  console.log('ojectPick',object);
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' } })
    .validate(object);

  if (error) {
    console.log('tao co loi~~');
    const errorMessage = error.details.map((details) => details.message).join(', ');
    return next( new AppError(errorMessage, 400));
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
