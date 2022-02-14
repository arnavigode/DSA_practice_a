function runProgram(input) {
    var newInput = input.split('\n');
    var n = +newInput[0];
    var arr = newInput[1].trim().split("");

    // console.log(arr)
    var [x, y] = [0, 0];
    // console.log(x, y)
    for(var i =0; i < arr.length; i++){
       
        if(arr[i] == "u"){
            x = x+1;
            // console.log(x, y)
        }
        else if(arr[i] == "d"){
            x = x-1;
            // console.log(x, y)
        }
        else if(arr[i] == "r"){
            y = y+1;
            // console.log(x, y)
        }
        else if(arr[i] == "l"){
            y = y-1;
            // console.log(x, y)
        }
    }
    console.log(x, y)
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`4
  lldd`)
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