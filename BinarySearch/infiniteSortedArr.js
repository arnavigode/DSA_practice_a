

var arr = [1, 2,3, 4, 5, 6, 7];
var x = 7;


var start =0;
var end = 1;

function  findInInfiniteArr(arr, x, start, end) {
    
    if(x == arr[start]){
        return end;
    }
    while(x > arr[end]){
        start = end
        // console.log(start)
        end = end *2; 
        // console.log(end)
    }

    while(start <= end){
        var mid = Math.floor(start + (end-start)/2);

        if(x == arr[mid]){
            return mid;
        }
        else if(x < arr[mid]){
            end = mid -1;
        }
        else{
            start = mid +1;
        }
    }
        
    return -1;
}
console.log(findInInfiniteArr(arr, x, start, end))
