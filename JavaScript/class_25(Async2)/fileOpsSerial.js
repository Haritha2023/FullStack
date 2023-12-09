const fs = require("fs");

let promiseReadFile1 = fs.promises.readFile("f1.txt");

function cb1(data) {
  console.log("This is data from 1file: " + data);
  let promiseReadFile2 = fs.promises.readFile("f2.txt");
  return promiseReadFile2;
}

function cb2(data) {
  console.log("This is data from 2file: " + data);
  let promiseReadFile3 = fs.promises.readFile("f3.txt");
  return promiseReadFile3;
}

function cb3(data) {
  console.log("This is data from 3file: " + data);
}

function handleError(err) {
  console.log("Error Statement->" + err);
}

promiseReadFile1.then(cb1).then(cb2).then(cb3).catch(handleError);
