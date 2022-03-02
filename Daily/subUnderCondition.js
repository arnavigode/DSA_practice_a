function runProgram(input) {
    var newInput = input.split('\n');
    var arr = newInput[0].split(" ").map(Number);
    // console.log(arr)
    var n = arr.length;
    // console.log(n)
    // var l = 0;
    // var r = n - 1;
    
    var temp = 0;

    for (var i = 0; i < n; i++){
        var sum = 0;
        for (var j = i; j < n; j++){
            sum += arr[j] ;
            // console.log(sum);
            if (sum == 0) {
            // temp.push(sum);
            console.log(i + " " + j);
        }
        }
        // sum += arr[i];
        // console.log(sum);
        
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`6 3 -1 -3 4 -2 2 4 6`)
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