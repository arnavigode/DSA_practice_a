function runProgram(input) {
    var newInput = input.split('\n');
    var arr = newInput[1].trim().split(" ").map(Number);
    var x = +newInput[2];
    var sum = 0;
    var temp = [];
    for(var i =0; i < arr.length; i++){   
        for(var j =i; j< arr.length; j++){
            sum = arr[i] + arr[j]
            // console.log(sum)
            if(sum == x){
                temp.push(sum)
            }
        }
    }
    if(temp.length > 0){
        console.log("yes")
    }
    else{
        console.log("no")
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`9
  1 2 3 4 5 6 7 8 9
  5`)
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