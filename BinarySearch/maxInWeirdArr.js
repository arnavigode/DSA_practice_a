var arr = [6, 9, 15, 25, 35, 50,60,70,100, 41, 29, 23, 8];
var start = 0;
var end = arr.length - 1;

function binaryMAx(arr, start, end) {
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return arr[mid];
    }
    if (arr[mid] > arr[mid - 1]) {
      start = mid;
    } else {
      end = end - 1;
    }
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return arr[start];
}

console.log(binaryMAx(arr, start, end));
