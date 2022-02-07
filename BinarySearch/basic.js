function basic(arr, x, start, end) {
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (x == arr[mid]) {
      return mid;
    } else if (x < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var x = 10;

var start = 0;
var end = arr.length - 1;
console.log(basic(arr, x, start, end));
