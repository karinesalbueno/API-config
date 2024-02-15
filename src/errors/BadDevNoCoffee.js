const ErrorWithResponse = require('./ErrorWithResponse');

class BadDevNoCoffee extends ErrorWithResponse {
  constructor(message, err) {
    super('Algo de errado aconteceu', 500, 'unhandled-error', err);
    console.error(message);
    console.error(err);
  }
}

module.exports = BadDevNoCoffee;
