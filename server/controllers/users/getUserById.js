const { getUserByIdQuery } = require('../../database');
const { CustomError } = require('../../utils');

const getUserByIdController = (req, res, next) => {
  const { id } = req.params;

  getUserByIdQuery(id)
    .then(user => {
      if (!user.rowCount) {
        throw new CustomError(404, 'User Not Found')
      }
      return user.rows[0]
    })
    .then((user) => {
      res.json({
        error: false,
        data: {
          message: user,
        }
      })
    })
    .catch((err) => next(err));
};

module.exports = { getUserByIdController };

