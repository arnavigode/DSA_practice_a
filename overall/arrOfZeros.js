function runProgram(input) {
    var newInput = input.split('\n');
    var arr = newInput[1].trim().split(" ").map(Number);
    // console.log(arr)
    var eve = 0;
    var odd = 0;

    for(var i =0; i < arr.length; i++){
        
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  1 2`)
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