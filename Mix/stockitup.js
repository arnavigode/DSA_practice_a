function runProgram(input) {
    var newInput = input.split('\n');
    var weeks = +newInput[0];
    var arr = newInput[1].trim().split(" ").map(Number);
    var items = [(110*5), (120*2), (42*2), (53*3), (40*2),(32*5), (126*2)];

    var sum =0;
    for(var i =0; i < arr.length; i++){
        if(arr[i] === 1){
            sum += items[i];
        }
    }
    console.log(sum*weeks)
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`4
  0 1 1 1 0 0 1`)
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