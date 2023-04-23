const { verifyToken, CustomError } = require('../utils');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    throw new CustomError(401, 'Unauthorized');
  }
  verifyToken(token)
    .then(decoded => {
      req.user = decoded;
      next();
    })
    .catch((err) => next(err));
};

module.exports = { checkAuth };
