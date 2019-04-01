
const {BAD_REQUEST} = require('./StatusCodes');

class BadRequestError extends Error{

    constructor(message){
        this._statusCode = BAD_REQUEST.code;
        this._message = message || BAD_REQUEST.message;
    }
}

module.exports = BadRequestError;