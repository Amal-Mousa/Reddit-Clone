const path = require('path');

const clientError = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "..", "client", "views", "html", "404.html"));

};
module.exports = { clientError };