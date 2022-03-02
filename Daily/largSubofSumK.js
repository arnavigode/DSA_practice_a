
function runProgram(input) {
  var newInput = input.split("\n");
  var [n, k] = newInput[0].split(" ").map(Number);
  var arr = newInput[1].split(" ").map(Number);
  // console.log(arr)
  // console.log(n, k)
  // console.log(arr)
  var maxVal = 0
  var i = 0;
  var j = 0;
  var sum = 0;
  while (j < arr.length) {
    sum += arr[j];
    if(sum < k){
        j++;
    }
    else if(sum == k){
        maxVal = Math.max(maxVal, j-i+1);
        j++;
    }
    else if(sum > k){
        while(sum > k && i < j){
            sum = sum - arr[i];
            i++;
        }
        if(sum == k){
            maxVal = Math.max(maxVal, j-i+1);
        }
        j++;
    }
  }
  // console.log(object)
  console.log(maxVal);
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`4 3
  2 3 4 6`);
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
