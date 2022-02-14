
function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];

    for(var a =1; a<=t; a++){
        var arr = newInput[a*2].trim().split(" ").map(Number);
        // console.log(arr)
        arr.sort()
        var elm;
        for(var i =0; i < arr.length; i++){
            // console.log(arr[i])
            if(arr[i] == arr[i+1]){
                // console.log(arr[i])
                continue;
            }
            else{
                elm = arr[i];
            }
        }
        console.log(elm)
    }

}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  1
  5
  5
  1 2 1 3 2`)
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