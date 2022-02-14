function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];
    var ans = [];
  
    for(var a =1; a<=t; a++){
        
        var arr = newInput[a].trim().split(" ");
        
        if(arr[0] == "PUSH"){ 
            var num = +arr[1];   
            ans.push(num)
        }
        if(arr[0] == "POP"){
            ans.pop()
        }
        else{
            // var x = ans.sort();
            if(arr[0] == "MIN"){
               var x = ans.map(Number)
                console.log(Math.min(...ans))
                
            }
            
        }
        
        // if(arr[0] == "MIN"){
        //     var x = ans.sort((a,b)=>{
        //         return a-b
        //     })
        //     console.log(ans)
        // }
    }
    
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`11
  PUSH 5
  PUSH 7
  PUSH 3
  PUSH 8
  PUSH 10
  MIN
  POP
  POP
  MIN
  POP
  MIN`)
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