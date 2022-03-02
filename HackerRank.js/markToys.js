function maximumToys(prices, k) {
    var toys = 0
    var sortedP = prices.sort((a, b) => a - b)
    var amountL = k;
    for (var i = 0; i < sortedP.length; i++){
        if (amountL < sortedP[i]) {
            break;
        } else {
            amountL = amountL - sortedP[i];
            toys++;
        }
    }
    return toys
}
