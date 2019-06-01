//Implement type integer

const Type = require('./Type');

class Int32 extends Type{

    //static #MAX_VALUE = Math.pow(2, 31) - 1;
    static get MAX_VALUE(){
        return Math.pow(2, 31) - 1; //this.#MAX_VALUE;
    }

    //static #MIN_VALUE = ;
    static get MIN_VALUE(){
        return Math.pow(2, 31) * -1; // this.#MIN_VALUE
    }


    static validate(value){
        let x;
        if (isNaN(value)) {
            return false;
        }
        x = parseFloat(value);
        return (x | 0) === x && x >= Int32.MIN_VALUE && x <= Int32.MAX_VALUE;
    }

    static range(val, {min, max} = {max : Int32.MAX_VALUE, min : Int32.MIN_VALUE}){
        return val >= min && val <= max;
    }
}

module.exports = Int32;