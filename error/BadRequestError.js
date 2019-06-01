
const {BAD_REQUEST} = require('./StatusCodes');
const {format} = require('util');

class BadRequestError extends Error{

    constructor(message, ...params){
        super();
        this._statusCode = BAD_REQUEST.code;
        this._message = message? format(message, params) : BAD_REQUEST.message;
    }
}

module.exports = BadRequestError;