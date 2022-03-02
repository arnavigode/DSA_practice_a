function maxsumsub(arr, n, k){
    if (n < k) {
        return -1;
    }
    else {
        var res = 0;
        for (var i = 0; i < k; i++){
            res += arr[i];

            var sum = res;
            
        }
        for (var i = k; i < n; i++){
                sum += arr[i] - arr[i - k];
                res = Math.max(res, sum);
            }
        return res;
    }
}
function runProgram(input) {
    var newInput = input.split('\n');
    var [n, k] = newInput[0].split(" ").map(Number);
    var arr = newInput[1].split(" ").map(Number);
    // console.log(arr)
    // console.log(n, k)
   console.log(maxsumsub(arr, n, k));
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`)
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
