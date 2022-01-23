var arr = [6, 5, 12, 10, 9, 1];
mergersort(arr, 0, arr.length-1)
// printArr(arr)
function mergersort(arr, l, r){
    if(l < r){
        var mid = Math.floor((l+r)/2)
        // console.log(mid)
        mergersort(arr, l, mid);
        mergersort(arr, mid+1, r);

        merge(arr, l, mid, r);
    }
}

function merge(arr, l, mid, r){
    var n1= mid-l+1;
    var n2= r-mid;

    var L=[];
    var R=[];

    for(var i =0; i < n1; i++){
        L[i] = arr[l+i];
    }
    for(var j =0; j <n2; j++){
        R[j] = arr[mid+1+j];
    }
    var i=0, j=0, k=l;

    while(i < n1 && j < n2){
        if(L[i] <= R[j]){
            arr[k] =L[i];
            i++;
        }
        else{
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while(i < n1){
        arr[k] = L[i];
        i++;
        k++;
    }
    while(j < n2){
        arr[k] = R[j];
        j++;
        k++;
    }

}

console.log(arr.join(" "))