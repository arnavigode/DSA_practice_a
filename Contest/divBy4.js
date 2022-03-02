function runProgram(input) {
    var newInput = input.split('\n');
    var n = +newInput[0];

    // console.log(n);
    if(n%4 == 0){
        
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`12`)
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