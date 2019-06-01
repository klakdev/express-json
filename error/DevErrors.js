
class NotImplementedError extends Error{

    get message(){
        return `method #${this._method} not implemented`
    }
    constructor(method){
        super();
        this._method = method;
    }
}

class InvalidSchemaError extends Error{

    #param;
    #hint;
    get message(){
        return `invalid schema at #${this.#param}.${this.#hint? `hint - ${this.#hint}` : ''}`
    }

    constructor(param, hint){
        super();
        this.#param = param;
        this.#hint = hint;
    }
}

module.exports = {
    InvalidSchemaError,
    NotImplementedError
};