
const Type = require('./Type');
const {NotImplementedError} = require('../error/index').development;


test('#validate - throw error',() => {
    expect(Type.validate).toThrowError(NotImplementedError);
});

class Implement extends Type{}

test('when not implemented should throw error',() => {
    expect(Type.validate).toThrowError(NotImplementedError);
});