"use strict";

function swapTwoVariables(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    return [a, b]
}

///////////////////////////////////
//Display Jorgan

process.stdout.write('\x1Bc');
let a = 2;
let b = 3;
console.log(`a before: ${a}, b before: ${b}`);
let output = swapTwoVariables(a, b);
console.log(`a after: ${output[0]}, b after: ${output[1]}`);
//Display Jorgan
///////////////////////////////////
