function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];

    for(var a =1; a<=t; a++){
        var arr = newInput[a*2].trim().split(" ").map(Number);
        // console.log(arr)
       
        // var freq = 0;
        // var count = -1;
        // for(var i =0; i<arr.length; i++){
        //     var freqCont = 1;
        //     for(var j =0; j < arr.length; j++){
        //         if(arr[j] == arr[i]){
        //             freqCont++;
        //         }
        //     }
        //     if(freq < freqCont){
        //         freq = freqCont;
        //         count = arr[i];
        //     }
        //     else if(freq == freqCont){
        //         count = Math.min(count, arr[i])
        //     } 
        // }
        // console.log(count)


        var max = 1;
        var count = 1;
        arr.sort()
        // console.log(arr)
        for(var i =1; i < arr.length; i++)
        {
            if(arr[i] == arr[i-1]){
                count++;
            }
            if(arr[i] != arr[i-1] || i == arr.length-1){
                if(count > max){
                    max = count;
                }
                count = 1;
            }
        }
        console.log(max)
    }
    
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  6
  1 4 4 4 5 3
  11
  1 2 3 4 5 4 3 2 1 3 4`)
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


{
    if(node == null){
        return;
    }
    (node.left);
    console.log(node.key + " ");
    (node.right)
}