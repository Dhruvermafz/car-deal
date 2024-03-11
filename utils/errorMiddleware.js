const { CustomError } = require("./errors");

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  return res.status(500).json({ error: "Internal Server Error" });
};

module.exports = errorHandler;
