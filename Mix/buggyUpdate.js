function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];

    for (var a = 1; a <= t; a++) {
      var arr2 = newInput[a * 2].trim().split(".").map(Number);
      var arr = newInput[(a * 2)-1].trim().split(".").map(Number);
    //   console.log(arr)
    //   console.log(arr2)
        if(arr[0] > arr2[0]){
            console.log("False")
        }
        if(arr[0] < arr2[0]){
            console.log("True")
        }
        if(arr[0] == arr2[0]){
            if(arr[1] > arr2[1]){
                console.log("False")
            }
            if(arr[1] < arr2[1]){
                console.log("True")
            }
            if(arr[1] == arr2[1]){
                if(arr[2] > arr2[2]){
                    console.log("False")
                }
                if(arr[2] < arr2[2]){
                    console.log("True")
                }
            }
        }
   
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  2.0.1
  1.9.8
  12.0.1
  12.10.0
  1.1.10
  1.1.12`)
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