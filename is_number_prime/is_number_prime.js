"use strict";


function numIsPrime(n) {

    if ( n == 2 || n == 3 ) return true;
    if ( n <= 1 || !(n % 3) || !(n % 2) ) return false;

    let devidor = 5;
    let maxLimitCheck = Math.sqrt(n);

    while (devidor <= maxLimitCheck) {
        if ( !(n % devidor) || !(n % (devidor + 2)) ) return false;
        devidor += 6;
    }
    return true;
}

///////////////////////////////////
//Display Jorgan

process.stdout.write('\x1Bc');
console.log(numIsPrime(127) ? `Number is a Prime Number.` : `Number is a Composite Number.`);

//Display Jorgan
///////////////////////////////////
