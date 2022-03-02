function suchpair(arr, k) {
    var l = 0;
    var r = arr.length-1;
     arr.sort((a,b)=> {return a-b})
    while(l<r){
        var sum = arr[l] + arr[r];
        if(sum == k){
            return 1;
        }
        else if (sum < k){
            l++;
        }
        else{
            r--;
        }
    }
    return -1;
}
function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];
    for (var a = 1; a <= t; a++) {
        var arr = newInput[a * 2].trim().split(" ").map(Number);
        var [n, k] = newInput[(a*2)-1].trim().split(" ").map(Number);
        console.log(suchpair(arr, k))
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`1
  5 2
  3 4 0 2 7`)
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