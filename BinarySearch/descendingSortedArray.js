var arr = [70, 60, 50, 40, 30, 20, 10];

var x = 10;

// check ndex f x in descending sorted array
var start =0;
var end = arr.length-1;

function descendingSorted(arr, start, end, x){
    while(start<=end){
        // var mid = Math.floor((start+end)/2);
        var mid =  Math.floor(start + ((end-start)/2)) //==> best practice
        if(x == arr[mid]){
            return mid;
        }
        else if(x > arr[mid]){
            end = mid-1;
        }
        else{
            start = mid+1
        }
    }
    return -1;
}
console.log(descendingSorted(arr, start, end, x))