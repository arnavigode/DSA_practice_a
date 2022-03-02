

function runProgram(input) {
    var newInput = input.split('\n');
    var num = newInput[0].trim();

    var ans = [[]];
    for(var i =0; i < num.length; i++){
        // console.log(num[i])
        ans.forEach(x =>{
            if(num[i] == 2){
                ans.push([...x, 'a'])
                ans.push([...x, 'b'])
                ans.push([...x, 'c'])
            }
            else if(num[i] == 3){
                ans.push([...x, 'd'])
                ans.push([...x, 'e'])
                ans.push([...x, 'f'])
            }
            else if(num[i] == 4){
                ans.push([...x, 'g'])
                ans.push([...x, 'h'])
                ans.push([...x, 'i'])
            }
            else if(num[i] == 5){
                ans.push([...x, 'j'])
                ans.push([...x, 'k'])
                ans.push([...x, 'l'])
            }
            else if(num[i] == 6){
                ans.push([...x, 'm'])
                ans.push([...x, 'n'])
                ans.push([...x, 'o'])
            }
            else if(num[i] == 7){
                ans.push([...x, 'p'])
                ans.push([...x, 'q'])
                ans.push([...x, 'r'])
                ans.push([...x, 's'])
            }
            else if(num[i] == 8){
                ans.push([...x, 't'])
                ans.push([...x, 'u'])
                ans.push([...x, 'v'])
            }
            else if(num[i] == 9){
                ans.push([...x, 'w'])
                ans.push([...x, 'x'])
                ans.push([...x, 'y'])
                ans.push([...x, 'z'])
            }
        })
    }
    // console.log(ans)
    for(var j =0; j < ans.length; j++){
        if(ans[j].length == num.length){
            var res = ans[j].join("")
            // console.log(res)
        }
    }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`88`)
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