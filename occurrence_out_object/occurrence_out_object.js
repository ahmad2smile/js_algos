
const inputArray = [ 0, 1, 1, 1, 2, 3, 2, 4];

function countOccurance(inarr) {
    let occuranceOf = {};
    inarr.forEach((x) =>{
        if (inarr.includes(x)) {
            occuranceOf[x] ? ++occuranceOf[x] : occuranceOf[x] = 1;
        }
    });
    return occuranceOf;
}

///////////////////////////////////
//Display Jorgan

process.stdout.write('\033c');
console.log(inputArray);
console.log(countOccurance(inputArray));

//Display Jorgan
///////////////////////////////////
