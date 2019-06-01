const All = require('./All');


test('#required - valid',() => {
    expect(All.required(0)).toBeTruthy();
    expect(All.required(null)).toBeTruthy();
    expect(All.required('')).toBeTruthy();
});

test('#required - invalid',() => {
    expect(All.required()).toBeFalsy();
    expect(All.required(undefined)).toBeFalsy();
});

