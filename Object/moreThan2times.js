

var arr = [1, 2, 3, 3, 5, 5, 5, 6, 6, 6, 6];

var obj = {};

for(var i =0; i < arr.length; i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1;
    }
    else{
        obj[arr[i]]++;
    }
}
// console.log(obj)
for(let key in obj){
    if(obj[key] > 2){
        
        console.log(key)
    }
}