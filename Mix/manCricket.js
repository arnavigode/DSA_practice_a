function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];

  for (var a = 1; a <= t; a++) {
    var arr = newInput[a * 2].trim().split(" ").map(Number);
    var overs = +newInput[a * 2 - 1];

    var ab = true;
    var virat = false;
    // console.log(overs)
    var abRun = 0;
    var vRun = 0;
    var ball = 0;
    for (var i = 0; i < arr.length; i++) { //match started
      ball++; //bowling started
      if (ab) {
        abRun += arr[i]; //ab is on strike add run to ab
      } else {
        vRun += arr[i]; //v is on strike add run to v
      }
      if (arr[i] % 2 !== 0) { //change strike if run is odd
        if (ab) {
          ab = !ab; //if ab is on strike he will go off strike vice-versa
          virat = !virat; 
        } else {
          virat = !virat;
          ab = !ab;
        }
      }
      if (ball == 6) { //change over 
        ball = 0; //bowling will start again
        virat = !virat; 
        ab = !ab;
      }
    }
    if (abRun == vRun) {
      console.log("Tie");
    } else if (abRun > vRun) {
      console.log("AB de Villiers");
    } else {
      console.log("Virat Kohli");
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
