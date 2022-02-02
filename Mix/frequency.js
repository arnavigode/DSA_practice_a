function frequncy(arr, l, r, v, count){
    
    for(var i =l-1; i < r; i++){     
        if(arr[i] == v){
            count++
            // console.log(count)
        }
    }
    // console.log(count)
    return count;
}

function runProgram(input) {
    var newInput = input.split('\n');
    var [n, x] = newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number);
    var count = 0;
    for(var a =1; a<=x; a++){
        var [l, r, v] = newInput[a+1].trim().split(" ").map(Number);
        console.log(frequncy(arr, l, r, v, count));
        // console.log(l, r, v)
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`6 2
  1 5 3 2 3 2 
  3 6 2
  4 4 2
  `)
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