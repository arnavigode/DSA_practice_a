function runProgram(input) {
    var newInput = input.split('\n');
    var S = newInput[0];
    // console.log(s)
    var n = S.length;
    var max = 1; 
    var start =0;

    for(var i =0; i < n; i++){
      for(var j = i; j<n; j++){
        var isPal = true;
        for(var k =0; k < (j-i+1)/2; k++){
          if(S.charAt(i+k) !== S.charAt(j-k)){
            isPal = false;
          }
        }
        if(isPal != false &&(j-i+1)>max){
          start = i;
          max = j - i +1;
        }
      }
    }
    console.log(max)
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`thisracecarisgood`)
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