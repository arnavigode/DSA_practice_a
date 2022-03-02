var arr = "1221";
    // console.log(arr)
    var n = arr.length;
    // console.log(n)
    for (var i = 0; i < n / 2; i++){
        if (arr[i] !== arr[n - 1 - i]) {
            console.log("No");
            break;
        }
        else {
            console.log("Yes")
            break;
        }
    }