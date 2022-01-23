let arr = [56, 65, 16, 40, 20, 75, 50, 44, 94];

var first = -1;
var second = -1;
if(arr.length < 2){
    console.log(-1)
}
for(var i =0; i < arr.length; i++){
    if(arr[i] > first){
        // console.log("second : ", second)
        second = first;
        // console.log("second : ", second)
        // console.log("first : ", first)
        first = arr[i];
        // console.log("first : ", first)
    }

    else if(arr[i] < first && arr[i] > second){
        // if(){
            second = arr[i];
            
        // }
    }
}
console.log(second)