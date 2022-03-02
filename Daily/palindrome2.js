function checkPalindrome(arr){
  var ans = "";
  var check = 0;
  var count = 0;
  for(var i =0; i < arr.length; i++){
    for(var j =0; j < arr.length; j++){
      if(arr[i] === arr[j] && i !==j && arr[i] !== 0){
        arr[i] = 0;
        arr[j] = 0;
        check++;
        break;
      }
      else if(j == arr.length-1){
        count++;
      }
      // console.log(arr)
    }
  }
  if (arr.length % 2 === 0) {
    if (check === arr.length / 2) {
        console.log("Possible!")
    } else {
        console.log("Not Possible!")
    }
} else {
    if (check === Math.floor(arr.length/2)) {
        console.log("Possible!")
    } else {
        console.log("Not Possible!")
    }
}

}
function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];
    for (var a = 1; a <= t; a++) {
        var arr = newInput[a * 2].trim().split("")
        // console.log(arr)
        checkPalindrome(arr)
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  6
  aabbcc
  5
  aabcd`)
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