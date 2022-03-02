
var all = []
var subset = []
var arr = [1, 2, 3]

function generateSubset(subset, i, arr){
    if( i == arr.length){
        all.push(subset)
        // console.log(all)
        console.log(subset)
        return;
    }
    generateSubset(subset, i+1, arr);
    subset.push(arr[i]);
    
    generateSubset(subset, i+1, arr);
    subset.pop()
    
}
generateSubset(subset, 0, arr)