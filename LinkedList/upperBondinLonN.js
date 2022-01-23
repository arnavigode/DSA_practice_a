function runProgram(input) {
  var newInput = input.split("\n");
  var [n, k] = newInput[0].trim().split(" ").map(Number);
  var arr = newInput[1].trim().split(" ").map(Number);

  let low = 0;
  let high = arr.length - 1;
  let last;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    // console.log(mid)
    if (arr[mid] == k) {
      last = mid + 1;
      low = mid + 1;
    } else if (k < arr[mid]) {
      high = mid - 1;
      last = mid;
    } else {
      low = mid + 1;
    }
  }

  console.log(last);
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`10 3
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
