

var arr = ["a", "c", "f", "h"];
var x = "h"


function ceilInSortedArr(arr, x) {
    var start = 0;
    var end = arr.length - 1;
    var res = "no next element present";
  
    while (start <= end) {
      var mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] == x) {
        start = mid +1;
      } else if (x < arr[mid]) {
        res = arr[mid];
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return res;
  }
  console.log(ceilInSortedArr(arr, x));