const ErrorWithResponse = require('./ErrorWithResponse');
const BadDevNoCoffee = require('./BadDevNoCoffee');
const BadConnection = require('./BadConnection');

const errorSwitch = (err) => {
  if (err instanceof ErrorWithResponse) {
    return err;
  }
  if (err instanceof Error) {
    return new BadDevNoCoffee('Uncaught Error somewhere, this is bad, catch it and throw a ErrorWithResponse subclass instead', err);
  }
  return new BadDevNoCoffee('Uncaught value somewhere, this is just weird ಠ_ಠ, catch it and throw a ErrorWithResponse subclass instead', err);
};
const errorHandler = (err, req, res, next) => {
  const error = errorSwitch(err);
  const resp = {
    message: error.message,
    errorId: error.eid,
  };
  if (process.env.NODE_ENV !== 'production') {
    resp.stack = error.stack;
  }
  if (error instanceof ErrorWithResponse) {
    res.status(error.code).json(resp);
  } else {
    next(error);
  }
};
module.exports = errorHandler;