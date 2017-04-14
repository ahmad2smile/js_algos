"use strict";


function nthFibonacci(n) {
    if(n <= 1) return n;
    else return nthFibonacci(n-1) + nthFibonacci(n-2);
}

///////////////////////////////////
//Display Jorgan

process.stdout.write('\x1Bc');
console.log(nthFibonacci(10));

//Display Jorgan
///////////////////////////////////
