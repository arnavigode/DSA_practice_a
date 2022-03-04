function countOcc(arr, k,searchFirst) {
  var left = 0;
  var right = arr.length - 1;
  var result = -1;
  while (left <= right) {
    var mid = (left + right) / 2;

    if (k == arr[mid]) {
      result = mid;

      if (searchFirst) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (k < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}
function runProgram(input) {
  var newInput = input.split("\n");
  var [n, k] = newInput[0].trim().split(" ").map(Number);
  var arr = newInput[1].trim().split(" ").map(Number);
  var first = countOcc(arr, k, true);
 
        // pass false for the last occurrence
        var last = countOcc(arr, k, false);
 
        var count = last - first + 1;
 
        if (first != -1) {
            console.log(count);
        }
        else {
            console.log(-1)
        }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`6 3
  2 3 3 3 6 9`);
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
