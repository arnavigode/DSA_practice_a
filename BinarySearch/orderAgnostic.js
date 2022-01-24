var arr = [70, 60, 50, 40, 30, 20, 10];

var x = 10;

// when order of sorting i.e asscending or descending is not given;
var decOrder;
if(arr.length > 1){
    if(arr[0] > arr[1]){
        decOrder = true;
    }
    else{
        decOrder= false
    }
}
// console.log(decOrder)
var start =0;
var end = arr.length-1;

if(decOrder){
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
}
