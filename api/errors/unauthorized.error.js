const CustomAPIError = require('./custom.error.js')

class UnauthorizedError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = 403
    }
}

module.exports = UnauthorizedError
