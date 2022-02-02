function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];

    for(var a =1; a<=t; a++){
        var [n, m] = newInput[a].trim().split(" ").map(Number);
        // console.log(n, m)
        var ans = Math.pow(m, 1/n);
        console.log(Math.floor(ans))
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  2 9
  6 4096
  3 126`)
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