function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    a.sort();

    const length = a.length;
    let min = Infinity; // Initial minimum absolute value.
    for(let i = 1; i < arr.length; i += 1) {
      const prev = arr[i - 1];
      const current = arr[i];
      const diff = Math.abs(prev - current);
      min = Math.min(min, diff);
    }

    console.log(min);
}
