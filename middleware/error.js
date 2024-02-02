const { customAPIError } = require('../error/custom-error');
const errorHandlerMiddleware = (err, re, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json('something went wrong');
};

module.exports = errorHandlerMiddleware;
