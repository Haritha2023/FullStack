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

// let myPromise = new Promise(function (resolve, reject) {
//   let a = 4;
//   let b = 4;

//   if (a === b) {
//     resolve("They are equal");
//   } else {
//     reject("They are not equal");
//   }
// });

// myPromise.then(function (res) {
//   console.log("res");
// });
// myPromise.catch(function (err) {
//   console.log("err");
// });

// const fs = require("fs");

// let promiseReadFile4 = fs.promises.readFile("f1.txt");
// let promiseReadFile5 = fs.promises.readFile("f2.txt");
// let promiseReadFile6 = fs.promises.readFile("f3.txt");

// function readFile1(data) {
//   console.log("the data is -> " + data);
// }

// function hadleError2(err) {
//   console.log(error);
// }

// promiseReadFile4.then(readFile1).catch(hadleError2);
// promiseReadFile5.then(readFile1).catch(hadleError2);
// promiseReadFile6.then(readFile1).catch(hadleError2);
