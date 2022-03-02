function runProgram(input) {
    var newInput = input.split('\n');
    var str1= newInput[0].trim();
    var str2= newInput[1].trim();
    // console.log(str1, str2)
    var count = 0;
    if(str1.length == str2.length){
        for(var i = 0; i < str1.length; i++){
            for(var j =0; j < str2.length; j++){
                if(str1[i] == str2[j]){
                    count++
                    // console.log(str1[i]);
                }
            }
        }
        // console.log(count)
        if(str1.length == count){
            console.log("Yes")
        }
        else{
            console.log("No")
        }
    }
    else{
        console.log("No")
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`amit
  mtia`)
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