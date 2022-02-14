function runProgram(input) {
    var newInput = input.split('\n');
    var [n, k] = newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number);
   
    var count = 0;
    var sum =0;
    var ans = []
    arr.sort((a,b)=>{
        return a-b;
    })
    // console.log(arr)
    for(var i =0; i <arr.length; i++){
        if(sum <= k){
            sum += arr[i];
            count++;
        } 
    }
    if(sum <= k){
        console.log(count)
    }
    // console.log(k)
    // console.log(sum)
    else{
        console.log(count-1)
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`4 20
  3 10 4 4 `)
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