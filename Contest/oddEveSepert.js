
function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];

    for(var a =1; a<=t; a++){
        var q = +newInput[a*3];
        var arr = newInput[(a*3)-1].trim().split(" ").map(Number);
        // console.log(arr);
        // console.log(q)

        var lt = [];
        var rt = [];
        var ans;
        var odd = [];
        var even = [];
        for(var i =0; i < arr.length; i++){
            if(arr[i]%2 == 0){
                even.push(arr[i])
            }
           else{
                odd.push(arr[i]); 
            }
            
        }
        if(q == 1){
            ans = even.concat(odd);
        }
        else{
            ans = odd.concat(even);
        }
        console.log(ans.join(" "))
    }

}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  6
  1 3 5 2 7 4
  1
  6 
  1 3 5 2 7 4
  2`)
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