function runProgram(input) {
    var newInput = input.split("\n");
    var t = +newInput[0];
  
    for (var a = 1; a <= t; a++) {
      var arr = newInput[a * 2].trim().split(" ").map(Number);
      var overs = +newInput[a * 2 - 1];
      var ab = [];
      var virat = [];
      var opener = "AB";
      for (var i = 0; i < arr.length; i++) {
          if(arr[i] > 0){      
              if (arr[i] % 2 == 0) {
                  if (opener === "AB") {
                      ab.push(arr[i]);
                      if((i+1)%6 === 0){
                          opener = "V";
                      }
                  }else if (opener === "V") {
                      virat.push(arr[i]);
                      if((i+1)%6 === 0){
                          opener = "AB";
                      }
                  }
          } else {
              if (opener === "AB") {
                  ab.push(arr[i]);
                  if((i+1)%6 !== 0){
                      opener = "V";
                  }
              }else if (opener === "V") {
                  virat.push(arr[i]);
                  if((i+1)%6 !== 0){
                      opener = "AB";
                  }
              }
          }
          }
      }
      // console.log(ab)
      // console.log(virat);
      var runAB = 0;
      for (var j = 0; j < ab.length; j++) {
        runAB = runAB + ab[j];
      }
      var runV = 0;
      for (var k = 0; k < virat.length; k++) {
        runV = runV + virat[k];
      }
      if (runAB > runV) {
        console.log("AB de Villiers");
      } else if (runV > runAB) {
        console.log("Virat Kohli");
      } else if (runV == runAB) {
        console.log("Tie");
      }
    }
  }
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  2
  1 2 0 0 1 1 6 6 4 1 6 1
  3
  0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
  1
  0 1 0 1 0 0`);
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
