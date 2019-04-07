
const {BadRequestError} = require('../error/index')
const {format} = require('util');

const globalValidators = {
    required(val, bool) {

        if(!val && bool)
            throw BadRequestError('parameter : %s - Missing parameter', val);
    },

    type(val, options){
        if(options instanceof Function)
            if(!val instanceof options)
                throw new BadRequestError('Parameter %s : Expected type %s : %s', val);
        console.log(val, options)
    }
};


function validateQuery(validators){
    return function v(query){
        const _q = query || {};

        return Object.entries(validators).map(([key, val]) => {
            let validatorFunctions = Object.keys(val);
            let prop = _q[key];
            validatorFunctions.map(func =>{

                return globalValidators[func](prop, val[func]);
            });
        })
    }
}

module.exports = {
    validateQuery
};
