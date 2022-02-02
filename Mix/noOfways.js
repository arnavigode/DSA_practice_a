function runProgram(input) {
    var newInput = input.split("\n");
    var t = +newInput[0];
  
    for (var a = 1; a <= t; a++) {
      var arr2 = newInput[a * 3].trim().split(" ").map(Number);
      var arr1 = newInput[(a * 3)-1].trim().split(" ").map(Number);
    //   console.log(arr1)
    //   console.log(arr2)
        var count =0;
      for(var i =0; i<arr1.length; i++){
          for(var j =0; j < arr2.length; j++){
              var sum = arr1[i];
              if(sum !== 100000){
                  sum += arr2[j]
              }
              if(sum == 100000){
                  count++
              }
          }
      }
      console.log(count)
      
    }
  }
  if (process.env.USER === "mrunmayigode") {
    runProgram(`2
    3
    99991 99994 99997
    3 3 3
    3
    1 4 7
    3 3 3`);
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
  