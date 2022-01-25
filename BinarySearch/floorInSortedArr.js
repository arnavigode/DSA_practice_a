// find floor value of given element in sorted array;

var arr = [1, 2, 8, 10, 10, 12, 19];
var x =5;

var start = 0;
var end = arr.length-1;
var res;

function floorSorted(arr, start, end, x, res){
   
    var mid = Math.floor(start +((end-start)/2));

    while(start<=end){
        if(arr[mid] == x){
            return arr[mid];
        }
        if(mid >0 && arr[mid-1]<= x && x < arr[mid]){
            return arr[mid-1];
        }
        if(x < arr[mid]){
           return floorSorted(arr, start, mid-1, x, res)
        }
        else{
            return floorSorted(arr, mid +1, end, x, res)
        }
    }
    // return res;
}
console.log(floorSorted(arr, start, end, x, res))