"use strict";

const reverseStr = str => (str || "").split("").reverse().join("");

const combineStringOnParenState = (parenState, str) => {
    if (parenState.startParen && parenState.startParen.startParen) {
        return combineStringOnParenState(parenState.startParen, parenState.startParen.str);
    }

    const midStr = (parenState.startParen && parenState.startParen.str) || str;

    return (parenState.startStr || "") + midStr + (parenState.endStr || "");
}


const reverseParenStrings = (parenState) => {
    if (!parenState.startParen) {
        parenState.str = reverseStr(parenState.str);

        return;
    }

    const newStartStr = reverseStr(parenState.endStr);
    const newStr = reverseStr(parenState.str);
    const newEndStr = reverseStr(parenState.startStr);

    parenState.startStr = newStartStr;
    parenState.str = newStr;
    parenState.startParen.str = newStr;
    parenState.endStr = newEndStr;


    return reverseParenStrings(parenState.startParen);
}

const splitStringOnParenState = (parenState, str) => {
    // 0------TAKE_ALL_TILL_HERE(
    parenState.startStr = str.slice(0, parenState.startParen.position);

    // +1 at start to exclude ( and at the end is already to excluded by slice )
    const charAfterStartParen = parenState.startParen.position + 1;
    const charBeforeEndParen = parenState.startParen.end;
    const newStr = str.slice(charAfterStartParen, charBeforeEndParen);
    parenState.str = newStr;

    // 0------)TAKE_ALL_FROM_HERE_TO_END
    parenState.endStr = str.slice(parenState.startParen.end + 1);

    if (parenState.startParen.startParen) {
        return splitStringOnParenState(parenState.startParen, newStr);
    }

    parenState.startParen.str = newStr;

    return;
}

const reverseTheStringInParens = (str) => {
    const parenState = {}

    str.split("").forEach((c, i) => {
        if (c === "(") {
            if (!parenState.startParen) {
                parenState.startParen = { position: i, end: undefined };
            } else {
                parenState.startParen.startParen = { position: i - parenState.startParen.position - 1, end: undefined }; // -1 to offset to 0 index
            }
        } else if (c === ")") {
            if (parenState.startParen.startParen && !parenState.startParen.startParen.end) {
                parenState.startParen.startParen.end = i - parenState.startParen.position - 1; // -1 to offset to 0 index
            } else {
                parenState.startParen.end = i;
            }
        }
    });

    splitStringOnParenState(parenState, str);
    reverseParenStrings(parenState.startParen);

    return parenState.startStr + combineStringOnParenState(parenState.startParen, parenState.startParen.str) + parenState.endStr;
}

///////////////////////////////////
//Display Jorgan

process.stdout.write('\x1Bc');
console.log("foo(bar) =>", reverseTheStringInParens("foo(bar)"));
console.log("\n(bar) =>", reverseTheStringInParens("(bar)"));
console.log("\nfoo(bar)blim =>", reverseTheStringInParens("foo(bar)blim"));
console.log("\nfoo(foo(bar))blim =>", reverseTheStringInParens("foo(foo(bar))blim"));

//Display Jorgan
///////////////////////////////////
