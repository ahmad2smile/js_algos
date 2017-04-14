"use strict";

function reverseStr(str) {
    if(str == "") return "";
    else return reverseStr(str.substr(1)) + str.charAt(0);
}

///////////////////////////////////
//Display Jorgan

process.stdout.write('\x1Bc');
console.log(reverseStr("I am a Developer"));

//Display Jorgan
///////////////////////////////////
