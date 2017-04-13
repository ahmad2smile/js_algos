"use strict";


function recursionFunc(n) {
    if(!n) return;

    console.log(n);
    //function would count down from n to 1 by calling itself
    //Recusion
    recursionFunc(n - 1);
}

///////////////////////////////////
//Display Jorgan

process.stdout.write('\x1Bc');
console.log("Count down from n to 1 with Recusion");
recursionFunc(10)

//Display Jorgan
///////////////////////////////////
