var arr = [2, 4, 5, 10, 10, 10, 18, 20];
var x = 10;

var start = 0;
var end = arr.length - 1;
var res = -1;
var first = firstoccurrence(arr, x, start, end, res)
function firstoccurrence(arr, x, start, end, res) {
    while (start <= end) {
      var mid = Math.floor(start + (end - start) / 2);
  
      if (x == arr[mid]) {
        res = mid;
        end = mid - 1;
      //   console.log(arr[mid]);
      } else if (x < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return res;
  }


  var ans = -1;
  var second = lastoccurrence(arr, x, start, end, ans);

  function lastoccurrence(arr, x, start, end, ans) {
    while (start <= end) {
      var mid = Math.floor(start + (end - start) / 2);
  
      if (x == arr[mid]) {
        ans = mid;
        start = mid + 1;
        // console.log(arr[mid])
      } else if (x < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return ans;
  }
  
  var count = (second - first)+1;
  console.log(count)