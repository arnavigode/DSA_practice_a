function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];
  for (var a = 1; a <= t; a++) {
    var arr2 = newInput[a * 3].trim().split(" ").map(Number);
    var arr1 = newInput[a * 3 - 1].trim().split(" ").map(Number);

    var left = 0;
    var right = arr2.length - 1;
    var count = 0;
    while (left < arr1.length && right >= 0) {
      if (arr1[left] == arr2[right]) {
        count++;
        left++;
        right--;
      } else if (arr1[left] > arr2[right]) {
        right--;
      } else left++;
    }
    console.log(count);
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`1
  6
  1 2 2 3 4 5
  4 4 3 2 1 1`);
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
