function bubbleSort(arr) {
    var tempA = [];
    for (var i = 0; i < arr.length; i++) {
        tempA.push(Math.abs(arr[i]*2))
      // console.log(arr)
    }
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (tempA[j] > tempA[j + 1]) {
        [tempA[j], tempA[j+1]] = [tempA[j+1], tempA[j]];
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr.join(" ");
}
function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];
  for (var a = 1; a <= t; a++) {
    var arr = newInput[a * 2].trim().split(" ").map(Number);
    // console.log(arr)
    console.log(bubbleSort(arr))
    // console.log(tempA)
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`1
  5
  -2 3 1 -4 6`);
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
