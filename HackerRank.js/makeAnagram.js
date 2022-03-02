function makeAnagram(s1, s2) {
    let map = {}, s1Count = 0, s2Count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (!map[s1[i]]) {
            map[s1[i]] = 1;
        } else {
            map[s1[i]] += 1;
        }
    }
    

    for (let j = 0; j < s2.length; j++) {
        if (map[s2[j]]) {
            s1Count += 1;
            map[s2[j]] -= 1;
        } else {
            s2Count += 1
        }
    }
 
    return ((s1.length - s1Count) + s2Count);

}
