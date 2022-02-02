/*
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length. Do not allocate extra space for another array, Time complexity O(n) and Space complexity O(1)

*/

var arr = [1, 2, 2, 2, 3, 4, 4, 4, 5, 5];
// o/p: 5

// function rmDuplicate(arr) {
//   var ans = [];
//   var count=0;
//   for (var i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] !== arr[i - 1]) {
//       console.log(arr[i]);
//         count++;
//         // console.log()
//     }
//   }
//   return count;
// }
// console.log(rmDuplicate(arr));

function rmDuplicate(arr) {
  var j = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return arr;
}
console.log(rmDuplicate(arr));
