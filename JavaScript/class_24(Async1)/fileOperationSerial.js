const fs = require("fs");

console.log("Before");

fs.readFile("f1.txt", cb1);

function cb1(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("This is data from 1file" + data);
  fs.readFile("f2.txt", cb2);
}

function cb2(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("This is data from 2file" + data);
  fs.readFile("f2.txt", cb3);
}

function cb3(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("This is data from 3file" + data);
}

console.log("After");
