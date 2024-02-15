const ErrorWithResponse = require('./ErrorWithResponse');

class BadConnection extends ErrorWithResponse {
  constructor(err) {
    super('Erro na Conexão com o banco', 500, 'connection-error', err);
  }
}

module.exports = BadConnection;
