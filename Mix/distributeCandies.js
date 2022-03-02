function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];

    for (var a = 1; a <= t; a++) {
      var arr = newInput[a * 2].trim().split(" ").map(Number);
      var n = newInput[(a * 2)-1].trim().split(" ").map(Number);
    //   console.log(arr)
        var ans = [];
        arr.sort()
    for(var i =0; i < arr.length; i++){
        ans.push(1);
        if(arr[i] < arr[i+1]){
            ans.push(1)
        }
    }
    console.log(ans.length)
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  3 
  1 0 2
  3
  1 2 2`)
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