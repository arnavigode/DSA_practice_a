function count(x, y){
    if(y != 1){
        if(x != 1){
            console.log("*");
            count(x/2, y);
        }
        else{
            y = y-1;
            count(8, y);
        }
    }
}
count(8, 8);