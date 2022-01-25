
//  search element in Nearly sorted array;

var arr = [10, 3, 40, 20, 50, 80, 70];
var x = 50;

var start = 0; 
var end = arr.length-1;

function findInNearlySorted(arr, start, end, x){

    var mid = Math.floor(start + ((end-start)/2));

    if(x == arr[mid]){
        return mid;
    }
    if(mid -1 >= start && arr[mid -1] == x){
        return mid-1;
    }
    if(mid+1 <= end && arr[mid +1] == x){
        return mid +1;
    }
    else if (x < arr[mid]){
        end = mid -2;
    }
    else{
        start = mid+2;
    }

}
console.log(findInNearlySorted(arr, start, end, x))