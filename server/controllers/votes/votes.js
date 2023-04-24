const { getVoteQuery, addVoteQuery, deleteVoteQuery } = require('../../database');

// ? error
const voteController = (req, res, next) => {
  const { type } = req.body;
  const { id: user_id } = req.user;
  const { post_id } = req.params;

  getVoteQuery({ post_id, user_id })
    .then((vote) => {
      console.log(vote.rows);
      if (!vote) {
        return addVoteQuery({ type, post_id, user_id })
      }
      // else if (vote.type) {
      //   return deleteVoteQuery({ id: post_id }) //TODO
      // }
    })
    .then(() => {
      res.json({
        error: false,
        data: {
          message: 'vote added/deleted successully'
        }
      })
    })
    .catch((err) => next(err));
};

module.exports = { voteController };
