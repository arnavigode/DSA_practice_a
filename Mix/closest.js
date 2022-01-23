// you have to find the sum of a pair whose sum is closest to the given target element

/** Brute force
 * TC= 0(n2)
 */
// var arr = [10, 22, 28, 29, 30, 40];
// var c = 32;

// var diff = Math.abs(arr[0] + arr[1] - c);
// var first = 0;
// var next = 1;

// for (var i = 0; i < arr.length; i++) {
//   for (var j = i + 1; j < arr.length; j++) {
//     var newDiff = Math.abs(arr[i] + arr[j] - c);
//     if (newDiff < diff) {
//       first = i;
//       next = j;
//       diff = newDiff;
//     }
//   }
// }
// console.log(arr[first] + " " + arr[next]);

/** Brute force
 * TC= 0(n)
 */
// var arr = [10, 22, 28, 29, 30, 40];
// var x = 40;

// var diff = Math.abs(arr[0] + arr[1] - x);
// var first = 0;
// var next = 1;

// for (var i = 0; i < arr.length; i++) {
//   var j = i + 1;
//   var newDiff = Math.abs(arr[i] + arr[j] - x);

//   if (newDiff < diff) {
//     first = i;
//     next = j;
//     diff = newDiff;
//   }
//   j = j + 1;
// }
// console.log(arr[first] + " " + arr[next]);


/** optimised
 * TC= 0(n)
 */

 var arr = [10, 22, 28, 29, 30, 40];
 var x = 58;

 var l =0;
 var r = arr.length-1;
 var diff =Number.MAX_VALUE;

 var first = l;
 var next = arr.length-1;

 while(l<r){
   var newDiff =Math.abs(arr[l] + arr[r]-x);

   if(newDiff < diff){
     diff = newDiff;
     first = l;
     next = r;
   }
   if(arr[l] + arr[r] < x){
     l++;
   }
   else{
     r--;
   }
 }
 console.log(arr[first] + " " + arr[next]);
 



