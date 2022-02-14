function check(str){
  
    var arr=str.split(" ").map(Number)
    
    var flag=-1
    
    var n=arr.length-1
    
    for(var i=0;i<arr.length;i++){
      if(arr[i]>=n){
        flag=i;
        break;
      }
    }
    
    console.log(i)
    }
function runProgram(input) {
    var newInput = input.split('\n');
    let str=newInput[1]
   check(str)
}
if (process.env.USER === "mrunmayigode") {
  runProgram(``)
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