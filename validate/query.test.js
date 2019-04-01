
const {validateQuery} = require('./query');

const validators = {
    name : {
        //set error message to return
        //set error code toreturn to client
        type : String,
        length : {
            min : 1,
            max : 20
        }
    },
    age : {
        //type Integer
        //type geo-json
        type: Number, 
        range : {
            min : 0,
            max : 120
        }
    }
}

const query = {
    name : 'klakdev',
    age : 33
}

const validator = validateQuery(validators);
const sanitizedQuery = validator(query)

