function fibon(n, arr){
    if(arr[n] != -1){
        return arr[n];
    }
    else{
      arr[n] = (fibon(n-1, arr)+ fibon(n-2, arr))
      return arr[n]
    }
}
function runProgram(input) {
    var newInput = input.split('\n');
    var n = +newInput[0];
    var arr = new Array(n+1).fill(-1);
    arr[0] = 0;
    arr[1] = 1;
     console.log(fibon(n, arr))
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`5`)
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