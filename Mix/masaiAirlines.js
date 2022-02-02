function runProgram(input) {
    var newInput = input.split('\n');
    var n = +newInput[0];
    var bag = newInput[1].trim().split(" ").map(Number);
    var hBag = newInput[2].trim().split(" ").map(Number);

    // console.log(bag);
    // console.log(hBag);

    for(var i =0; i < bag.length; i++){
        if(bag[i] <= 15 && hBag[i] <= 7){
            console.log("Boarding");
        }
        else{
            console.log("Stop")
        }
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`4
  12 14 15 6
  8 5 7 4`)
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