function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];
    var stack =[];
    for(var a=1; a<=t; a++){
        var arr = newInput[a].trim().split(" ")
        var q = arr[0];
        var num = +arr[1]; 
        
        if(arr[0] == "PUSH")   {
            stack.push(arr[1]);
        }
        else if (stack.length == 0){
            console.log("EMPTY")
        } 
        else if (arr[0] == "POP"){
            stack.pop()
        }
        else if(arr[0] == "MIN"){
            console.log(Math.min(...stack))
            // break;
        }
         
       
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`26
  PUSH 100
  PUSH 50
  MIN
  PUSH 45
  MIN
  POP
  MIN
  POP
  MIN
  PUSH 20
  PUSH 19
  PUSH 21
  PUSH 21
  MIN
  POP
  MIN
  POP
  MIN
  POP
  MIN
  POP
  MIN
  POP
  POP
  POP
  MIN`)
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