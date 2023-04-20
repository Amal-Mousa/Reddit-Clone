class CustomError extends Error {
  constructor(status, msg) {
    super(msg) //* call the constructor for Error class
    this.status = status
    this.msg = msg
  };
};

module.exports = { CustomError };
