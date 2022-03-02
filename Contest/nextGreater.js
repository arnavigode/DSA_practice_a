function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];

  for (var a = 1; a <= t; a++) {
    var arr = newInput[a * 2].trim().split(" ").map(Number);
    // console.log(arr)
    var stack = [];
    var res = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack.length && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        res.push(-1);
      } else {
        res.push(stack[stack.length - 1]);
      }
      stack.push(arr[i]);
    }
    var ans = res.reverse().join(" ");
    console.log(ans);
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  4
  1 3 2 4
  5
  2 8 40 20 22`);
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
