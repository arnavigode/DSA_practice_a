function runProgram(input) {
    var newInput = input.split('\n');
    var arr = newInput[1].trim().split(" ").map(Number);

    var total =0;
    var left = 0;
    var ans;
    for(var i =0; i < arr.length; i++){
        total += arr[i]
    }
    for(var i =0; i < arr.length; i++){
        var right = total - left - arr[i];
        
        if(left == right){
            ans = i+1;
            // break;
        }
        left += arr[i];
    }
    if(ans){
        console.log(ans)
    }
    else{
        console.log(-1)
    }

}
if (process.env.USER === "mrunmayigode") {
  runProgram(`5
  3 3 5 5 1`)
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