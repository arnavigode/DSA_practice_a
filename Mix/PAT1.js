var arr = [
    [2, 4],
    [4, 6],
    [2, 6],
    [15, 10],
    [15, 20],
  ];

// function pat1(arr) {
//     var temp = [];
//   for (var i = 0; i < arr.length; i++) {
//     var num = arr[i];
//     // console.log(num)
//     var a = num[0];
//     var b = num[1];
//     var hcf;
   
//     for (var j = 1; j <= a && j <= b; j++) {
//       if (a % j == 0 && b % j == 0) {
//         hcf = j;
//       }
//     }
//     var lcm = (a*b)/hcf;

//     if(lcm/a === 0){
//         temp.push(1)
//     }
//     else{
//         temp.push(2)
//     }
//     return temp;
//   }
// }
// console.log(pat1(arr));
function pat1(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        // console.log(num)
        var a = num[0];
        var b = num[1];
        
        if(a%b === 0 || b%a === 0){
            temp.push(1)
        }else{
            temp.push(2)
        }
    }
    return temp;
}
console.log(pat1(arr));

