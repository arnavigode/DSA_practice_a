// function roatte(arr){
//     for(var i =0; i < arr.length/2; i++){
//         for(var j =i; j<arr.length - i -1; j++){
//             var temp = arr[i][j];
//             arr[i][j] = arr[]
//         }
//     }
// }
function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0].trim();
    var j = 1;
    for(var i =1; i <= t; i++){
        var [row, col] = newInput[j++].trim().split(" ").map(Number);
        var arr = [];
        for(var k =0; k < row; k++){
            arr.push(newInput[j++].trim().split(" ").map(Number));
        }
        console.log(arr);
        
    }
    
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  4
  1 2 3 4
  5 6 7 8
  1 2 3 4
  5 6 7 8
  3
  1 2 3
  4 5 6
  7 8 9`)
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