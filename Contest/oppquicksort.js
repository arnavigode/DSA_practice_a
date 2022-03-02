function quickSort(arr) {
  if (arr.length < 2) return arr;
  let min = 1;
  let max = arr.length - 1;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  let pivot = arr[rand];
  const left = [];
  const right = [];
  arr.splice(arr.indexOf(pivot), 1);
  arr = [pivot].concat(arr);
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

function runProgram(input) {
  var newInput = input.split("\n");
  var arr = newInput[1].trim().split(" ").map(Number);
  var res = quickSort(arr);
  console.log(res.reverse());
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`5
  2 3 1 4 5`);
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
