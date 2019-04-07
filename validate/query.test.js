
const {validateQuery} = require('./query');

const validators = {
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
        //type Integer
        //type geo-json
        type: Number,
        required : true,
        range : {
            min : 0,
            max : 120
        }
    },
    allowedAccess :{
        type : Boolean,
        required : true
    }

}

const query = {
    name : 'klakdev',
    age : 33
}

const validator = validateQuery(validators);
const sanitizedQuery = validator(query)

