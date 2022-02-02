function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return "False";
  } else {
    
    for (var i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return "False";
      }
    }
    return "True";
  }
}
function runProgram(input) {
  var newInput = input.split("\n");
  var t = +newInput[0];

  for (var a = 1; a <= t; a++) {
    var str2 = newInput[a * 2].trim().split("");
    var str1 = newInput[a * 2 - 1].trim().split("");
    var st1 = str1.sort();
    var st2 =str2.sort();
    console.log(anagram(st1, st2));
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  abcd
  dcab
  aa
  aaa`);
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
