

class All{

    static required(value){
        return undefined !== value
    }

    static add(name, fn){
        if(typeof name !== 'string')
            throw new Error('first parameter must be a string');
        if(typeof fn !== 'function')
            throw new Error('second parameter must be a function');
        All[name] = fn;
    }
}
module.exports = All;