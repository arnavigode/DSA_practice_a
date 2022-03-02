function runProgram(input) {
    var newInput = input.split('\n');
    var n = +newInput[0];
    // console.log(n)
    
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3`)
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