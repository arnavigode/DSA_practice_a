function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];

  for (var i = 1; i <= t; i++) {
    var str = newInput[i].trim();
    // console.log(str)
    if (str.length % 2 == 0) {
      var stack = [];
      var start = ["{", "[", "("];
      var end = ["}", "]", ")"];
      var flag = false;
      for (let j = 0; j < str.length; j++) {
        if (start.includes(str[j])) {
          stack.push(str[j]);
          flag = true;
        } else {
          var index = start.indexOf(stack[stack.length - 1]);
          if (str[j] == end[index]) {
            stack.pop();
          }
        }
      }
      if (stack.length == 0 && flag) {
        console.log("balanced");
      } else {
        console.log("not balanced");
      }
    } else {
      console.log("not balanced");
    }
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  {([])}
  ()
  ([]
  `);
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
