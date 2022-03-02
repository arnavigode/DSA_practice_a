function ceilInSortedArr(arr, x) {
  var start = 0;
  var end = arr.length - 1;
  //   var res = -1;

  while (start < end) {
    var mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}

function runProgram(input) {
  var newInput = input.split("\n");
  var [n, x] = newInput[0].trim().split(" ").map(Number);
  var arr = newInput[1].trim().split(" ").map(Number);

  console.log(ceilInSortedArr(arr, x));
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`10 4
  0 2 4 4 5 5 7 7 9 10`);
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
