function runProgram(input) {
  var newInput = input.split("\n");
  var arr = newInput[1].trim().split(" ").map(Number);

  var four = Math.ceil(arr.length / 4);

  var fourthPart = arr.splice(-four);
  var thirdPart = arr.splice(-four);
  var secondPart = arr.splice(-four);
  var firstPart = arr;

  const c1 = firstPart.reduce((s, a) => s + a, 0);
  const c2 = secondPart.reduce((s, a) => s + a, 0);
  const c3 = thirdPart.reduce((s, a) => s + a, 0);
  const c4 = fourthPart.reduce((s, a) => s + a, 0);

//   console.log(c1, c2, c3, c4)

  var ans = 2*c1 + c2 + 2*c3 + c4

  console.log(ans)
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`8
  1 2 3 4 5 6 7 8`);
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
