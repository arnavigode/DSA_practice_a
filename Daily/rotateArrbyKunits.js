// Rotate Arr by k units


function rotate(arr, k) {
  for (var i = 0; i < k; i++) {
    for (var j = arr.length - 1; j > 0; j--) {
      var temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
  return arr;
}


function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];
    for (var a = 1; a <= t; a++) {
        var arr = newInput[a * 2].trim().split(" ").map(Number);
        var [n, k] = newInput[(a*2)-1].trim().split(" ").map(Number);
        console.log(rotate(arr, k))
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  2 1
  1 2
  2 2
  1 2
  3 1
  1 2 3`)
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