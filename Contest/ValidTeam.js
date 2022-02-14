function runProgram(input) {
    var newInput = input.split('\n');
    var [n, k] = newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number);

    // console.log(arr)
    var s1 = 0;
    var diff = 0;
    for(var i =0; i < n; i++){
        s1 = s1 + arr[i];
        var s2 = 0;
        for(var j = n; j < arr.length; j++){
            // console.log(j)   
            s2 = s2 + arr[j];
            // console.log(s2)
            // break;
        }
    }
    diff = Math.abs(s1-s2);
    // console.log(diff)
    if(diff < k){
        console.log("Valid")
    }
    else{
        console.log("Invalid")
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3 4
  1 8 5 9 6 1`)
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