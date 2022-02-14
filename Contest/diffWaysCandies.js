function runProgram(input) {
    var newInput = input.split('\n');
    var [n, k] = newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number);
    // console.log(arr)
    if(arr.length == 1){
        if(arr[0] !== k){
            console.log(-1)
        }
    }
    
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`1 1
  2`)
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