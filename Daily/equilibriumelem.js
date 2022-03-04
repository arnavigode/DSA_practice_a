function eqElem(arr, n) {
  var leftSum;
  var rightSum;
  for (var i = 0; i < n; ++i) {
    leftSum = 0;
    for (var j = 0; j < i; j++) {
      leftSum += arr[j];
      rightSum = 0;
    }

    for (var j = i + 1; j < n; j++) {
      rightSum += arr[j];
    }

    if (leftSum == rightSum) {
      return i;
    }
  }
  return -1;
}
function runProgram(input) {
  var newInput = input.split("\n");
  var n = +newInput[0];
  var arr = newInput[1].trim().split(" ").map(Number);
  console.log(eqElem(arr, n));
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`5
  3 3 5 5 1`);
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
