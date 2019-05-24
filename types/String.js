const Type = require('./Type');

class _String extends Type{

    static validate(val){
        return val && typeof val  === 'string' || val === undefined;
    }

    static length(val, {min = 0, max = Infinity} = {}){
        return val.length >= min && val.length <= max;
    }
}

module.exports = _String;

