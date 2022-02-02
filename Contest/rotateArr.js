function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];
    var ans = [];

    for(var a =1; a<=t; a++){
        var arr = newInput[a*2].trim().split(" ").map(Number);
        var [n, k] = newInput[(a*2)-1].trim().split(" ").map(Number);

        for(var i =0; i < k; i++){
            for(var j =n-1; j >= 0; j--){
                ans = arr[i-1];
                arr[i-1]= arr[i];
                arr[i] = ans;
                // console.log(ans)
            } 
           
        }
        
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  3 1
  1 2 3
  2 2
  1 2
  2 3
  1 2`)
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