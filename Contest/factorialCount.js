function factorial(n) {
  if (n == 0) {
    return 1;
  }
  // console.log(n *factorial(n - 1))
  return n * factorial(n - 1);
}
function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];

  for (var a = 1; a <= t; a++) {
    var arr = [];
    var num = +newInput[a].trim();
    // console.log(n)
    for (var i = 1; i <= num; i++) {
      var n = i;
      // console.log(factorial(n))
      arr.push(factorial(n));
    }
    console.log(arr)
    // var count = 0;
    // var sum = 0;
    // for (j = 0; j < arr.length - 1; j++) {
    //   sum += arr[j];
    //   //   console.log(sum)
    //   if (sum == num) {
    //     count++;
    //   }
    //   if (sum < num) {
    //       console.log(sum)
    //     // if (arr[i] < num) {
    //     //   console.log(arr[i]);
    //     // }
    //   }
    // }
    // console.log(count);
    function count(arr, num){
        var c = new Array(num+1);
        c.fill(0)
        c[0] = 1;
        var count =0;
        for(var x =1; x <= num; x++){
            for(var y = 0; y<arr.length; y++){
                if(arr[y] <= num){
                    // console.log(arr[y])
                    if(x >= arr[y]){
                        c[x] += c[x- arr[y]];
                        // count++
                        
                    }
                    
                }
                // console.log(c[x])
            }
            
        }
        return count;
    }
    console.log(count(arr, num))
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`1
  17`);
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
