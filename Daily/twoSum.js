function runProgram(input) {
    var newInput = input.split('\n');
    
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  4 9
  2 7 11 15
  5 10
  1 2 3 5 5
  2 100
  48 49`)
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