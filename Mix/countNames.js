function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];
  var arr = [];
  var count = {};
  for (var a = 1; a <= t; a++) {
    arr.push(newInput[a].trim());
  }
  // console.log(arr);
  // arr.forEach(function(i){
  //     count[i] = (count[i] || 0) + 1;
  // })
  // console.log(count)
  arr.sort();
  // console.log(arr)
  var c;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != c) {
      if (count > 0) {
        console.log(c + " " + count);
      }
      c = arr[i];
      count = 1;
    } else {
      count++;
    }
  }
  if (count > 0) {
    console.log(c + " " + count);
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  masai
  school
  masai`);
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
