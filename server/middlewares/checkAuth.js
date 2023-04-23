// take token , verify it , next if there is no errors and next(err) if there is an error
// we call checkAuth middleware bcz it will come before routes.

const { verifyToken, CustomError } = require('../utils');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;
  // ! not logged in 
  if (!token) {
    throw new CustomError(401, 'Unauthorized');
  }
  //! to verify token if its valid or not(edit, expired)
  verifyToken(token)
    .then(decoded => {
      req.user = decoded;
      // ! transfer to the next controller
      next();
    })
    .catch((err) => next(err));
};

module.exports = { checkAuth };
