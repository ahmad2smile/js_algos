"use strict";

const inputArray = [ 0, 1, 1, 1, 2, 3, 2, 4];

function removeDub(inarr) {
    let clearedArray = [];

    inarr.forEach((x) =>{
        if (!clearedArray.includes(x)) clearedArray.push(x);
    });

    return clearedArray;
}

///////////////////////////////////
//Display Jorgan

process.stdout.write('\x1Bc');
console.log(inputArray);
console.log(removeDub(inputArray));

//Display Jorgan
///////////////////////////////////
