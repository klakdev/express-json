
const {BadRequestError, dev : {InvalidSchemaError}} = require('../error/index');
const {format} = require('util');
const {All} = require('../types/All');




class Validator{

    #schema;
    #entries;
    constructor(schema){
        this.#schema = schema;

    }

    build() {

        function _build(obj) {
            return Object.entries(obj).map(([key, val]) => {
                if (!val) throw new InvalidSchemaError(key, 'no schema described');
                let type, validators;
                if ('function' === typeof val) {
                    type = val;
                    validators = [];
                }
                if ('object' === typeof val) {
                    type = val.type;
                    delete val.type;
                    if (type === Object)
                        validators = _build(val);
                    else if (!type.validate)
                        throw new InvalidSchemaError(type, '#validate not implemented')
                    validators = Object.entries(val).map(([key, val]) => {
                        if (!type[key])
                            throw new InvalidSchemaError(key, 'Method not implemented')
                        //TODO validate val schema
                        return [key, val];
                    });
                }
                if (!type) throw new InvalidSchemaError(key, 'type not described');
                return {key, type, validators};
            })
        }

        this.#entries = _build(this.#schema)
    }

    validate(obj){
        let sanObj = {};
        this.#entries.forEach(({key, type, validators}) =>{
            let data = obj[key];
            type.validate(data);
            validators.forEach(([key, param]) =>{
                type[key](data, param)
            });
        })
    }
}

function validateTypes(args){
    return function v(query){
        const _q = query || {};

        return Object.entries(args).map(([key, val]) => {
            let validators = Object.keys(val);
            let prop = _q[key];
            validators.map(func =>{

                return globalValidators[func](prop, val[func]);
            });
        })
    }
}

module.exports = Validator;
