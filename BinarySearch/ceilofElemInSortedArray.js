// ceil of element in sorted array
//smallest element greater than target

var arr = [2, 3, 5, 6, 7, 8, 8, 9];
var x = 4;

function ceilInSortedArr(arr, x) {
  var start = 0;
  var end = arr.length - 1;
  var res = -1;

  while (start <= end) {
    var mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] == x) {
      return arr[mid];
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
