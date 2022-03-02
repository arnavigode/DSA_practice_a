// function foo(){
//     var total = 1;
//     var sum = arr[0];
//     var prev = arr[0];
//     var repeat;
//     for (var i = 1; i < arr.length; i++) {
//       if (prev == arr[i]) {
//         repeat = prev;
//       }
//       sum += arr[i];
//       total += i + 1;
//       prev = arr[i];
//     }
//     var missing = total - (sum - repeat);
//     console.log(missing, repeat);
// }
function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];

  for (var a = 1; a <= t; a++) {
    var arr = newInput[a * 2].trim().split(" ");
    var n = newInput[a * 2 - 1].trim().split(" ").map(Number);
    //   console.log(arr)
    // console.log(n)
    arr = arr.sort((a, b) => a - b);
    let obj = {};
    for (var i = 0; i < arr.length; i++) {
      let c = arr[i];
      if (obj[c] === undefined) {
        obj[c] = 1;
      } else {
        obj[c]++;
      }
    }
    let ans = [];
    let out = 0;
    for (key in obj) {
      if (obj[key] >= 2) {
        out = key;
      }
      ans.push(key);
    }
    let  mss = arr[0]
    for(var i = 1; i<=n; i++){
        if(arr[i] != i){
            mss = i
        }
    }
    console.log(mss, out)
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  5
  1 2 2 3 4
  4
  1 2 3 3
  1
  1 2 2`);
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
