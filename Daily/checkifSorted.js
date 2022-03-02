function numOfRotation(arr, n, start, end) {
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);

    var next = (mid + 1) % n;
    var prev = (mid + n - 1) % n;
    // console.log(prev)
    if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
      return mid;
    }
    if (arr[start] <= arr[mid]) {
      return (start = mid + 1);
    } else if (arr[mid] < arr[end]) {
      return (end = mid - 1);
    }
  }
}

function runProgram(input) {
  var newInput = input.split("\n");
  var arr = newInput[1].trim().split(" ").map(Number);
  // console.log(arr)
  var n = arr.length;
  var start = 0;
  var end = n - 1;
  var res = numOfRotation(arr, n, start, end);
  console.log(res)
  if (res > 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  // console.log()
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`15
  10 11 12 13 14 15 -1 3 0 1 2 4 5 7 8`);
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
