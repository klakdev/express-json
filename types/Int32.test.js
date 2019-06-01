const Int32 = require('./Int32');


test('#validate - valid',() => {
    expect(Int32.validate(2)).toBeTruthy();
    expect(Int32.validate(Int32.MAX_VALUE)).toBeTruthy();
    expect(Int32.validate(Int32.MIN_VALUE)).toBeTruthy();
    expect(Int32.validate((function(){return 3}()))).toBeTruthy();
});

test('#validate - invalid',() => {
    expect(Int32.validate(Int32.MAX_VALUE + 1)).toBeFalsy();
    expect(Int32.validate(Int32.MIN_VALUE - 1)).toBeFalsy();
    expect(Int32.validate('false')).toBeFalsy();
    expect(Int32.validate(false)).toBeFalsy();
    expect(Int32.validate( function () {})).toBeFalsy();
});

test('#range - valid', () =>{
    expect(Int32.range(2, {min : 2, max : 3})).toBeTruthy();
    expect(Int32.range(2, {min : 1, max : 2})).toBeTruthy();
});