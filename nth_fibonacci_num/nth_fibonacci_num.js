"use strict";


function nthFibonacci(n) {
    let fibo = [0, 1];
    if(n <= 2) return 1;

    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo[n];
}

///////////////////////////////////
//Display Jorgan

process.stdout.write('\x1Bc');
console.log(nthFibonacci(10));

//Display Jorgan
///////////////////////////////////
