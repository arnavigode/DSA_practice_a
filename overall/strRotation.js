function runProgram(input) {
  var newInput = input.split("\n");
  var str = newInput[0].trim();
  var str2 = newInput[1].trim();

  // console.log(str, rev)

  var n = 1;
  var isSame = "No";
  

  while (n <= str2.length) {
    var first = [];
    var second = [];
    var remain = str2.length - n;
    for (var i = remain; i < str2.length; i++) {
      second.push(str2[i]);
    }

    for (var j = 0; j < remain; j++) {
      first.push(str2[j]);
    }

    first.reverse();
    second.reverse();

    var ans = first.concat(second);

    ans.reverse();

    var final = ans.join("");

    if (final == str) {
      isSame = "Yes";
    //   console.log(isSame);
      break;
    }
    //  else {
    //   console.log(isSame);
    // //   break;
    // }
    n++;
  }
  console.log(isSame)
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`carbon
  boncar`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
