
const logoutController = (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(401).json({
      error: true,
      data: {
        message: 'not authenticated'
      },
    })
  }
  else {
    res.clearCookie('token').status(200).json({
      error: false,
      data: {
        message: 'User Logout Successfully'
      }
    });
  }
};

module.exports = { logoutController };
