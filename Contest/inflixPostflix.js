function runProgram(input) {
    var newInput = input.split('\n');
    var arr = newInput[0].trim().split("");

    // console.log(str)
    var char = []
    var symbols = ["+", "/", "-", "*", "(", ")", "^", "%"];
    for(var i =0; i < arr.length; i++){
      // if(arr[i] == "+" || arr[i] == "-" || arr[i] == "/" || arr[i] == "*" || arr[i] == "(" || arr[i] == ")"){
      //   continue;
      // }
      // else{
      //   char.push(i)
      // }
      for(var j = 0; j < symbols.length; j++){
        if(arr[i] == symbols[j]){
          // console.log(arr[i])
          if(arr[i+1] === symbols[j]){
            continue;
          }
          else{
            char.push(arr[i+1])
          }
        }
      }
    }
    console.log(char)
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`)
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