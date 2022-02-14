/**tc=O(n*n) => brute force*/

function bruteForce(arr) {
  var maxcount = 0;
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count > maxcount) {
      maxcount = count;
      index = i;
    }
  }
  if (maxcount > arr.length / 2) {
    console.log(arr[index]);
  } else {
    console.log(-1);
  }
}
function optSol(arr) {
  var major = arr[0];
  var count = 1;
  var final = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] === major) {
      count++;
    }
    else if (arr[i] !== major) {
      count--;
    }
    if (count === 0 && i < arr.length-1) {
      major = arr[i];
      count = 1;
    }
  }
  for(var j = 0; j < arr.length; j++){
    if(major == arr[j]){
      final++
    }
  }
  if (final > arr.length/2) {
    return major;
  } else {
    return -1;
  }
}
function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];

  for (var a = 1; a <= t; a++) {
    var arr = newInput[a * 2].trim().split(" ").map(Number);
    // console.log(arr);
    var n = arr.length;
    // console.log(n)
    // bruteForce(arr)
    console.log(optSol(arr));
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
6
1 1 1 1 2 3
5
1 1 2 2 3`);
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
