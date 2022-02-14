function sortAward(arr) {}
function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];

  for (var a = 1; a <= t; a++) {
    var arr = newInput[a * 2].trim().split(" ").map(Number);
    // console.log(arr)
    var gold = "";
    var silver = "";
    var bronze = "";
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == 0) {
        gold += arr[i] + " ";
      } else if (arr[i] == 1) {
        silver += arr[i] + " ";
      } else if (arr[i] == 2) {
        bronze += arr[i] + " ";
      }
    }
    console.log(gold + silver + bronze);
  }
 
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  1
  2
  3
  2 0 1
  4
  2 0 2 1`);
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
