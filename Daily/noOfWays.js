function noOfWays(n){
    if(n < 0){
        return 0;
    }
    if(n == 0){
        return 1;
    }
    return noOfWays(n-1) + noOfWays(n-2) + noOfWays(n-3);
}

function runProgram(input) {
    var newInput = input.split('\n');
    var n = +newInput[0];
    console.log(noOfWays(n));
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`4`)
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