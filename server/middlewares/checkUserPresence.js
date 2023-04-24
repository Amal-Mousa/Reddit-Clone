const { getUserByIdQuery } = require('../database');
const { CustomError } = require('../utils');

const checkUserPresence = (req, res, next) => {
  const { id } = req.params;

  getUserByIdQuery(id)
    .then(user => {
      if (!user.rowCount) {
        throw new CustomError(404, 'User Not Found')
      }
      next();
    })
    .catch((err) => next(err));
};

module.exports = { checkUserPresence };

