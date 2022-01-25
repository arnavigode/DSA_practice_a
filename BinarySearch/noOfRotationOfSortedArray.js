var arr = [11, 12, 15, 1, 2, 5, 6, 8];
var n = arr.length;
// find number of times sorted array is rotated;

var start = 0;
var end = n - 1;

function numOfRotation(arr, n, start, end) {
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);

    var next = (mid + 1) % n;
    var prev = (mid + n - 1) % n;
    // console.log(prev)
    if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
      return mid;
    }
    if (arr[start] <= arr[mid]) {
      return (start = mid + 1);
    } else if (arr[mid] < arr[end]) {
      return (end = mid - 1);
    }
  }
}
console.log(numOfRotation(arr, n, start, end));
