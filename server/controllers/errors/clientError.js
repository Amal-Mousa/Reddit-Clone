const path = require('path');

const clientError = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "..", "client", "views", "404.html"));

};
module.exports = { clientError };