function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];

  for (var a = 1; a <= t; a++) {
    var arr = newInput[a * 2].trim().split(" ").map(Number);
    // console.log(arr)
//     var res = arr[0];

//     for (var i = 0; i < arr.length; i++) {
//       var temp = arr[i];
//       for (var j = i + 1; j < arr.length; j++) {
//         res = Math.max(res, temp);
//         temp = temp * arr[j];
//       }
//       res = Math.max(res, temp);
//     }
//     console.log(res)
var max = arr[0];
var min = arr[0];
var maxSum =arr[0];
// var isSub = false;
if(arr.length == 0){
    console.log(0)
}
for(var i =1; i < arr.length ; i++){
    var temp = max;
    max = Math.max(arr[i], Math.max(arr[i]* temp, arr[i]*min));
    min = Math.min(arr[i], Math.min(arr[i]*temp, arr[i]*min));
    maxSum = Math.max(max, maxSum);

}
console.log(maxSum)
  }


}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  3
  -3 0 -2
  4
  4 5 -1 2`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
