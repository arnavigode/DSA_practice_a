function runProgram(input) {
    var newInput = input.split('\n');
    var n = +newInput[0];
    var arr = newInput[1].trim().split(" ").map(Number);
    // console.log(n)
    // console.log(arr)

    var t = Math.floor(n/3);
    var isPresent = false

    for(var i =0; i < arr.length; i++){
        var count = 0;
        for(var j =i; j < arr.length; j++){
            if(arr[i] == arr[j]){
                count++;
            }
        }
        if(count > t){
            console.log(arr[i]);
            isPresent = true;
            break;
        }
    }
    if(!isPresent){
        console.log("")
    }
    
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  3 2 3`)
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