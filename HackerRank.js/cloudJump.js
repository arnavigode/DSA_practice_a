// Jumping on the Clouds


var array = [0, 0, 0, 1, 0, 0, 1, 0]
var arr = [];

function jumpingOnClouds(c) {
   var count=0
   var i=0
    while (i< len(c)-1){
        if (i+2<len(c) && c[i+2]==0){
            i+=1
        }
        i+=1
        count+=1
    }
    return count 
}
var result = jumpingOnClouds(array);
console.log(result);