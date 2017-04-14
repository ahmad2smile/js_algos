
function sortMergeArray(a, b) {
    let mergedArray = a.concat(b);

    mergedArray.sort((elm0, elm1)=>{
        return elm0 - elm1;
    })

    return mergedArray;
}

///////////////////////////////////
//Display Jorgan

process.stdout.write('\033c');
console.log(sortMergeArray([1, 10, 9, 2], [3, 5, 7, 8, 6, 4]));

//Display Jorgan
///////////////////////////////////
