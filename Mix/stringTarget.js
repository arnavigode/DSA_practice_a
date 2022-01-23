var str = "arunabh";
var target = "a";
var ans = [];
var res = [];

var j =0;
for(var i =0; i < str.length; i++){
    if(target.length >1){
        if(target[j+1] == str[i+1]){
            ans.push(str[i]);
            res.push(i);
            j++
        } 
    }
    else{
       if(target[0] == str[i]){
           ans.push(str[i])
           res.push(i)
       }
    }  
}
// console.log(str.indexOf(target))
console.log(ans)
console.log(res[0])


