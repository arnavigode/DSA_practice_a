function runProgram(input) {
    var newInput = input.split('\n');
    var n = +newInput[0];
    var vaccine = newInput[1].trim().split(" ").map(Number);
    var medichlorians = newInput[2].trim().split(" ").map(Number);
    var count = 0;
    for(var i =0; i < n; i++){
        if(vaccine[i]>= medichlorians[i]){
            count++;
        }
    }
    if(count == n){
        console.log("Yes")
    }
    else{
        console.log("No")
    }

    
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`5
  123 146 454 542 456
  100 328 248 689 200`)
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