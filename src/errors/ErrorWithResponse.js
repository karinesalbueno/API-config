class ErrorWithResponse extends Error {
    constructor(message, responseCode = 500, errorId = 'unknown', actualError = undefined) {
      super(message);
      if (actualError && actualError.stack) {
        this.stack = actualError.stack;
      }
      // Error.captureStackTrace(this, ErrorWithResponse);
  
      this.eid = errorId;
      this.code = responseCode;
    }
  }
  
module.exports = ErrorWithResponse;
  