const CustomAPIError = require('./custom.error.js')
class ConflictError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = 409
  }
}

module.exports = ConflictError
