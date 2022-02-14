function selectionSort(arr) {
  var n = arr.length;

  for (var i = 0; i < n; i++) {
    var min = i;
    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      var tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
}

function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];
  for (var a = 1; a <= t; a++) {
    var arr = newInput[a * 2].trim().split(" ").map(Number);
    var [n, k] = newInput[a * 2 - 1].trim().split(" ").map(Number);
    // console.log(arr)
    // console.log(n, k)
    selectionSort(arr);
    console.log(arr);

    var x = n - k;

    var sum1 = 0;
    var sum2 = 0;

    for (var i = 0; i < x; i++) {
      sum1 = sum1 + arr[i];
    }

    // console.log(sum1)
    for (let i = arr.length - 1; i >= arr.length - x; i--) {
      sum2 = sum2 + arr[i];
    }
    console.log(sum2 - sum1);
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`1
  5 1
  1 2 5 4 3`);
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
