const fs = require("fs");

console.log("Before");

//read file using fs and callback

// fs.readFile("f1.txt", (error, data) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log("this is file" + data);
// });

console.log("After");

//READ FILE USSING FS AND PROMISES

// let promiseReadFile = fs.promises.readFile("f1.txt");

// promiseReadFile.then(function (data) {
//   console.log("the file data is->" + data);
// });
// promiseReadFile.catch(function (err) {
//   console.log(err);
// });

// let promiseReadFile2 = fs.promises.readFile("f2.txt");

// promiseReadFile2.then(function (data2) {
//   console.log("the file data is->" + data2);
// });
// promiseReadFile.catch(function (err) {
//   console.log(err);
// });

// let promiseReadFile3 = fs.promises.readFile("f3.txt");

// promiseReadFile3.then(function (data3) {
//   console.log("the file data is->" + data3);
// });
// promiseReadFile.catch(function (err) {
//   console.log(err);
// });

//READ FILE USING FS AND PROMISES WITH NO CODE REPETITION

let promiseReadFile1 = fs.promises.readFile("f1.txt");
let promiseReadFile2 = fs.promises.readFile("f2.txt");
let promiseReadFile3 = fs.promises.readFile("f3.txt");

function readFileCallback(data) {
  console.log("The file data->" + data);
}

function hadleError(err) {
  console.log("Error Statement->" + err);
}

promiseReadFile1.then(readFileCallback).catch(hadleError);
promiseReadFile2.then(readFileCallback).catch(hadleError);
promiseReadFile3.then(readFileCallback).catch(hadleError);

//promise practice

// let myPromise = new Promise((resolve, reject) => {
//   let a = 10;
//   let b = 10;
//   if (a == b) {
//     resolve("a and b are equal");
//   } else {
//     reject("a and b are not equal");
//   }
// });

// myPromise.then(function (result) {
//   console.log(result);
// });
// myPromise.catch(function (error) {
//   console.log(error);
// });

// const fs = require("fs");

// let promiseReadFile1 = fs.promises.readFile("f1.txt");
// let promiseReadFile2 = fs.promises.readFile("f2.txt");
// let promiseReadFile3 = fs.promises.readFile("f3.txt");

// function readFileCallback(data) {
//   console.log("data from file" + data);
// }
// function readErrorCallback(error) {
//   console.log(error);
// }
// promiseReadFile1.then(readFileCallback).catch(readErrorCallback);
// promiseReadFile2.then(readFileCallback).catch(readErrorCallback);
// promiseReadFile3.then(readFileCallback).catch(readErrorCallback);
