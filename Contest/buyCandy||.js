
function generateSubset(subset, i, arr, all, k){
    if( i == arr.length){
        all.push(subset)
        // console.log(all)
        // console.log(subset)
        var sum = 0;
        var ans = []
        for(var i =0; i < subset.length; i++){
            sum = sum + subset[i];
        }
        // console.log(sum)
        if(k == sum && subset.length > 0){
            // console.log(subset);
            ans.push(subset)
        }
        if(ans.length !== 0){
            console.log(ans.sort((a,b)=>{
                return a -b
            }))
        }
        
        return;
    }
    generateSubset(subset, i+1, arr, all, k);
    subset.push(arr[i]);
    
    generateSubset(subset, i+1, arr, all, k);
    subset.pop()
    
}

function runProgram(input) {
    var newInput = input.split('\n');
    var [n, k] = newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number);
    // console.log(arr)
    var subset = []
    var all = []
   var ans = generateSubset(subset, 0, arr, all, k)
    // console.log(ans)
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`5 10
  2 4 4 6 8`)
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