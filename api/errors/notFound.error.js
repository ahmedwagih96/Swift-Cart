const CustomAPIError = require('./custom.error.js')
class NotFoundError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = 404
    }
}

module.exports = NotFoundError
