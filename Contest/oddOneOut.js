function runProgram(input) {
    var newInput = input.split('\n');
    var [a, b, c] = newInput[0].trim().split(" ").map(Number);
    // console.log(a ,b ,c)
    if(a !== b && b!== c && c !== a){
        console.log(0)
    }
    if(a == b && b== c && c == a){
        console.log(a)
    }
    if(a == b && b !== c && a !== c){
        console.log(c)
    }
    if(a == c && c !== b && a !== b){
        console.log(b)
    }
    if(b == c && c !== a && a !== b){
        console.log(a)
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2 2 2`)
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