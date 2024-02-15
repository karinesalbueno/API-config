const ErrorWithResponse = require('./ErrorWithResponse');
class InsufficientArguments extends ErrorWithResponse {
  constructor() {
    super('Faltam argumentos nessa requisição', 403, 'insufficient-args');
  }
}
module.exports = InsufficientArguments;