const fs = require("fs");

console.log("Before");
fs.readFile("f1.txt", (error, data1) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("this is file" + data1);
});

fs.readFile("f2.txt", (error, data2) => {
  if (error) {
    console.log("error");
    return;
  }
  console.log("this is file2 " + data2);
});

fs.readFile("f3.txt", (error, data3) => {
  if (error) {
    console.log("error");
    return;
  }
  console.log("this is file3 " + data3);
});
console.log("After");
