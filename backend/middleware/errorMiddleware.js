//Overwrite default express error handler
const errorHandler = (err, req, res, next) => {
  // default error code if not given in goalController - 500(server error)
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    // only give stack trace if on development mode
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { errorHandler };
