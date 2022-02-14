function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];

    for(var a =1; a <= t; a++){
        var [n, k] = newInput[(a*2)-1].trim().split(" ").map(Number);
        var arr = newInput[(a*2)].trim().split(" ").map(Number);
        // console.log(k)
        // console.log(arr)
        var iseven = false
        if(arr[0] == 1){
                iseven = true;
        }
        var count = 0;
        for(var i =0; i < arr.length; i++){
            if(iseven){
                if(arr[i] == 0 && i %2 == 0 && arr[i+1] !== 1 && arr[i-1] !==1){
                    count++;
                }
            }
            else{
                if(arr[i] == 0 && i %2 == 1 && arr[i+1] !== 1 && arr[i-1] !==1){
                    count++;
                }
            }
        }
        // console.log(count)
        if(count == k){
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