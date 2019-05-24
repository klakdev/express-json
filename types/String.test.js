const String = require('./String');


test('#validate - valid',() => {
    expect(String.validate('string should be valid')).toBeTruthy();
    expect(String.validate('2')).toBeTruthy();
    expect(String.validate(undefined)).toBeTruthy();
});

test('#validate - invalid',() => {
    expect(String.validate(function () {})).toBeFalsy();
    expect(String.validate(2)).toBeFalsy();
    expect(String.validate({})).toBeFalsy();
    expect(String.validate(null)).toBeFalsy();
    expect(String.validate(NaN)).toBeFalsy();
});


test('#length - valid',() => {
    const str = 'string should be valid';
    expect(String.length(str)).toBeTruthy();
    expect(String.length(str, {min: str.length})).toBeTruthy();
    expect(String.length(str, {max: str.length})).toBeTruthy();
});

test('#length - invalid',() => {
    const str = 'string should not be valid';
    expect(String.length(str, {min: str.length + 1})).toBeFalsy();
    expect(String.length(str, {max: str.length - 1})).toBeFalsy();
});