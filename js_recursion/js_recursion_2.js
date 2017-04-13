"use strict";


let categories = [
    { id: "animals", "parent": null},
    { id: "mamals", "parent": "animals"},
    { id: "cats", "parent": "mamals"},
    { id: "dogs", "parent": "mamals"},
    { id: "chihuahua", "parent": "dogs"},
    { id: "labrador", "parent": "dogs"},
    { id: "persian", "parent": "cats"},
    { id: "siamese", "parent": "cats"},
]

function recursionFunc(categories, parent) {
    let node = {};

    categories.filter(r => r.parent == parent)
        .forEach(r => node[r.id] = recursionFunc(categories, r.id));

    return node;
}

///////////////////////////////////
//Display Jorgan

process.stdout.write('\x1Bc');
console.log(
    JSON.stringify(recursionFunc(categories, null), null, 2)
);

//Display Jorgan
///////////////////////////////////
