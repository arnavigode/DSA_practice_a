function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];
  for (var a = 1; a <= t; a++) {
    var k = +newInput[a * 3];
    var arr = newInput[a * 3 - 1].trim().split(" ").map(Number);
    // console.log(arr)
    // console.log(k)
    var ans = [];
    for (var i = 0; i < arr.length; i++) {
      var sum = 0;
      for (var j = i; j < arr.length; j++) {
        // console.log(arr[i], arr[j]);
        sum = arr[i] + arr[j];
        // console.log(sum)
        if (sum < k) {
          ans.push(sum);
        }
      }
    }
    // console.log(ans)
    if(ans.length > 0){
        ans.sort((a, b)=> {return b-a})
        console.log(ans[0])
    }
    else{
        console.log(-1)
    }
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  5
  1 2 3 4 5
  7
  3
  30 10 20
  15`);
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
