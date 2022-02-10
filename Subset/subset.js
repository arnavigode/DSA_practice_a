
var all = []
var subset = []
var i;
var arr = [1, 2, 3]

function generateSubset(subset, i, arr){
    if( i == arr.length){
        all.push(subset)
        console.log(all)
    }
    generateSubset(subset, i+1, arr);
    subset.push(arr[i]);
    console.log(subset)
    generateSubset(subset, i+1, arr);
    subset.pop()
}
console.log(generateSubset(subset, 0, arr))