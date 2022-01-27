// find floor value of given element in sorted array;

var arr = [2,3,5,6,7,8,8,9];
var x =11;

var start = 0;
var end = arr.length-1;
// var res;

// function floorSorted(arr, start, end, x){
   
//     var mid = Math.floor(start +((end-start)/2));

//     while(start<=end){
//         if(x>=arr[end]){
//             return arr[end];
//         }
//         if(arr[mid] == x){
//             return arr[mid];
//         }
//         if(mid >0 && arr[mid-1]<= x && x < arr[mid]){
//             return arr[mid-1];
//         }
//         if(x < arr[mid]){
//            return floorSorted(arr, start, mid-1, x)
//         }
//         else{
//             return floorSorted(arr, mid +1, end, x)
//         }
//     }
// }


function floorSorted(arr, start, end, x){
    var res = -1;
    while(start  <= end){
        var mid = Math.floor(start +((end-start)/2));

        if(arr[mid] == x){
            return arr[mid];
        }
        else if(x < arr[mid]){
            end = mid -1;
        }
        else{
            res = arr[mid];
            start = mid +1;
        }
    }
    return res;
}
console.log(floorSorted(arr, start, end, x))