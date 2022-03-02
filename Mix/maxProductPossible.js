function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];
  for (var a = 1; a <= t; a++) {
    var arr = newInput[a * 2].trim().split(" ").map(Number);

    var prod = [];

    var i =0;
    var j = i+1;
    while(i < j){
        // if(i !== j){
            var p = arr[i] * arr[j];
            prod.push(p)
            i++;
            j++;
        // }
    }
    prod.sort((a, b)=> {return (b-a)})
    console.log(prod);
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  6 
  1 0 7 2 4 0
  5
  1 2 3 4 5
  2
  0 0`);
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
