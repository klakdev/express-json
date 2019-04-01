
const 


function validateQuery(validators){
    return function v(query){
        const _q = query || {}; 
        return Object.entries(validators).map(([key, val]) => {
            let prop = _q[key];
            if(!prop && val.required)
                throw 
        })
    }
}

module.exports = {
    validateQuery
}
