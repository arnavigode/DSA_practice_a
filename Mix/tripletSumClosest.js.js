function sumClosest(arr, k){
  var l = 0;
  var r = 0;
  var small = Infinity;

  arr.sort((a,b) => a-b);

  for(var i =0; i < arr.length -2; i++){
    l = i+1;
    r = arr.length -1;
    while(l < r){
      var sumofThree = arr[i] + arr[l] + arr[r];
      var diff = k - sumofThree;

      if(diff === 0){
        return k - diff;
      }
      if(Math.abs(diff) < Math.abs(small)){
        small = diff
      }

      if(diff < 0){
        r--;
      }
      else{
        l++
      }
    }
  }
  return k - small;
}

function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];

  for (var a = 1; a <= t; a++) {
    var arr = newInput[a * 2].trim().split(" ").map(Number);
    var [n, k] = newInput[(a * 2)-1].trim().split(" ").map(Number);
    // console.log(n, k)
    console.log(sumClosest(arr, k))
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  4 1
  -1 2 1 -4
  3 1
  0 0 0`);
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
