function power(n, m) {
  if (m == 0) {
    return 1;
  } else if (m == 1) {
    return n;
  } else {
    return n * power(n, m - 1);
  }
}

function runProgram(input) {
  var newInput = input.split("\n");
  let [k, m] = newInput[0].trim().split(" ").map(Number);
  var n;
  var arr = [];
  for (var i = 1; i <= k; i++) {
    n = i;
    // console.log(power(n, m));
    arr.push(power(n, m));
  }
    console.log(arr)
  var count = 0;
  // var sum = 0;
  for (j = 0; j < arr.length - 1; j++) {
    for (l = j + 1; l < arr.length; l++) {
        // console.log(arr[j] + arr[l])
      if (arr[j] + arr[l] == k) {
        count++;
      }
    }
  }
  console.log(count);
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`100 2`);
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
