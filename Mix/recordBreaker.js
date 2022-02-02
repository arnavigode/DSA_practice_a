function records(arr) {
  var max = arr[0];
  var min = arr[0];

  var good = 0;
  var bad = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      good++;
    }
    if (arr[i] < min) {
      min = arr[i];
      bad++;
    }
  }
  console.log(good, bad);
}

function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];

  for (var a = 1; a <= t; a++) {
    var arr = newInput[a * 2].trim().split(" ").map(Number);
    // console.log(arr)
    records(arr);
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  9
  10 5 20 20 4 5 2 25 1
  10
  3 4 21 36 10 28 35 5 24 42`);
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
