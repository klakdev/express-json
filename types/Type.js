const {NotImplementedError} = require('../error/index').dev;
const All = require('./All');

class Type extends All{

    static validate(){
        throw new NotImplementedError('validate')
    }
}

module.exports = Type;