function runProgram(input) {
    var newInput = input.split('\n');
    var [n, k] = newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number);

    // console.log(arr)
    var stack = [];

    for(var i =0; i < arr.length; i++){
        if(arr[i] == k){
            stack.push(i)
        }
    }
    if(stack.length == 0){
        console.log(-1);
    }
    else{
        console.log(stack[0]);
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`6 6
  3 4 7 9 1 2`)
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