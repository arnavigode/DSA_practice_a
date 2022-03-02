function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];

    for(var a =1; a <= t; a++){
        var [n, k] = newInput[(a*2)-1].trim().split(" ").map(Number);
        var arr = newInput[(a*2)].trim().split(" ").map(Number);
        // console.log(k)
        // console.log(arr)
        var count=0;
        for(var i =0; i < arr.length; i++){
          if(i ==0 && arr[0] == 0 && arr[1] == 0){
            arr[0] = 1;
            count++;
          }
          else if(i == n-1 && arr[n-1] == 0 && arr[n-2] == 0){
            arr[i] = 1;
            count++;
          }
          else if(arr[i] == 0 && arr[i+1] == 0 && arr[i-1] == 0){
            arr[i] = 1;
            count++;
          }
        }
        // console.log(count)
        if(count >= k){
            console.log("Yes")
        }
        else{
            console.log("No")
        }
    }


}
if (process.env.USER === "mrunmayigode") {
  runProgram(`1
  4 1
0 0 1 0`)
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