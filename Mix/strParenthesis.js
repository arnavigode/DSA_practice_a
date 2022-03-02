function runProgram(input) {
  var newInput = input.split("\n");
  var s = newInput[0].split("");
  // console.log(s)
  var p1 = [];
  var p2 = [];
  var p3 = [];

  for (var i = 0; i < s.length; i++) {
    if (s[i] == "[" || s[i] == "{" || s[i] == "(") {
      p1.push(s[i]);
    } else if (s[i] == "]" || s[i] == "}" || s[i] == ")") {
      p1.pop();
    }
    // if (s[i] == "{") {
    //   p2.push(s[i]);
    // } else if (s[i] == "}") {
    //   p2.pop();
    // }
    // if (s[i] == "(") {
    //   p3.push(s[i]);
    // } else if (s[i] == ")") {
    //   p3.pop();
    // }
  }
  if (p1.length === 0) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
//   if (p2.length === 0) {
//     console.log("balanced");
//   } else {
//     console.log("unbalanced");
//   }
//   if (p3.length === 0) {
//     console.log("balanced");
//   } else {
//     console.log("unbalanced");
//   }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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
