
const Validator = require('./Validator');
const {Int32, String} = require('../types/index');

const schema = {
    name : {
        //set error message to return
        //set error code to return to client
        type : String,
        required : true,
        length : {
            min : 1,
            max : 20
        }
    },
    age : {
        //TODO type geo-json,
        //TODO convert string to integer
        type: Int32,
        required : true,
        range : {
            min : 0,
            max : 120
        }
    }
};


const query = {
    name : 'klakdev',
    age : 33
};

const validator = new Validator(schema);
validator.build();
const sanitizedQuery = validator.validate(query);

