function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];

    for(var a =1; a<=t; a++){
        var arr = newInput[a*2].trim().split(" ").map(Number);
        // console.log(arr);
        var p = 1;
        var temp = [];
        for(var i =0; i < arr.length; i++){
            p = (p* arr[i])
        }
        for(var j = 0; j < arr.length; j++){
            temp.push(p/arr[j])
        }
        console.log(temp.join(" "))
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  5
  1 2 3 4 5
  3
  3 2 7`)
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