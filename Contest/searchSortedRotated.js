function check(arr, start, end) {
    while(start <= end){
        var mid = Math.floor(start + ((end-start)/2));
        if(arr[end] < arr[start]  && arr[end] < arr[end-1]){
            return end;
        }
        if((arr[mid] < arr[mid-1] && arr[mid] < arr[mid+1]) || (arr[start] == arr[end] && arr[start] == arr[mid])){
            return mid;
        }
        else{
            if(arr[mid] > arr[start]){
                start = mid;
            }
            else{
                end = mid;
            }
        }
    }
    return;
}
function find(n, k, arr, start, end) {
    while(start <= end){
        var mid = Math.floor(start + ((end-start)/2));
        if(arr[mid] == k){
            return mid;
        }
        else if(arr[mid]>k){
            end = mid -1;
        }
        else if(arr[mid] < k){
            start = mid +1;
        }
    }
    return -1;
}
function runProgram(input) {
  var newInput = input.split("\n");
  var [n, k] = newInput[0].trim().split(" ").map(Number);
  var arr = newInput[1].trim().split(" ").map(Number);
  var start = 0;
  var end = arr.length - 1;
  if(k == arr[start]){
      console.log(start)
  }
  else if(k == arr[end]){
      console.log(end)
  }
  else{
      var indx = check(arr, start, end);
      if(k < arr[end]){
          console.log(find(n, k, arr, indx, end));
      }
      else{
        console.log(find(n, k, arr, start, indx)); 
      }
  }
//   console.log(findInNearlySorted(arr, start, end, k));
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`6 6
  3 4 7 9 1 2`);
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
