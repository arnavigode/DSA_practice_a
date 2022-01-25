// find element in sorted rotated array

var arr = [11, 12, 15, 20, 2, 5, 6, 8];
var n = arr.length;
var x = 5;

var start =0;
var end = n-1;

function indexMin(arr, n, start, end){
    while(start <= end){
        var mid = Math.floor(start + ((end-start)/2));

        var next = (mid +1)%n;
        var prev = (mid + n -1)%n;

        if(end < start){
            return -1
        }
        if(end == start){
            return start;
        }

        if(arr[mid] <= arr[next] && arr[mid]<= arr[prev]){
            return mid;
        }
        if(arr[start] <= arr[mid]){
            return start = mid +1;
        }
        else if(arr[end] > arr[mid]){
            return end = mid -1;
        }
    }
}

// console.log(indexMin(arr, n, start, end))

function binarysearch(arr, start, end, x){
    
    var mid = Math.floor(start +((end-start)/2));

    if(x == arr[mid]){
        return mid;
    }
    if(x > arr[mid]){
        return start = mid +1;
    }
    else{
        return end = mid -1;
    }
}

function findingElement(arr, n, x){
    var min = indexMin(arr, n, 0, n-1);

    if(min == -1){
        return binarysearch(arr, 0, n - 1, x);
    }
    if(arr[min] == x){
        return min;
    }
    if(arr[0] <= x){
        return binarysearch(arr, 0, min - 1, x);
    }
    else{
        return binarysearch(arr, min, n - 1, x);
    }
}

console.log(findingElement(arr, n, x));
