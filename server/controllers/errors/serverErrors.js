const { ValidationError } = require('joi');
const { JsonWebTokenError } = require('jsonwebtoken');
const { CustomError } = require('../../utils');

const serverError = (err, req, res, next) => {
  // console.log(err);
  const { status, message } = err;

  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: true,
      data: {
        message: message
      }
    });
  };

  if (err instanceof JsonWebTokenError) {
    return res.status(401).json({
      error: true,
      data: {
        message: 'Unauthorized'
      }
    })
  };

  if (err instanceof CustomError) {
    return res.status(status).json({
      error: true,
      data: {
        message: message
      }
    })
  };

  res.status(500).json({
    error: true,
    data: {
      message: 'Internal Server Error'
    }
  });

}

module.exports = { serverError }