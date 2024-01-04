const names = ["Haritha", "Ravi", "Isha", "Goutham"];

//for each
// names.forEach((name) => {
//   console.log(name);
// });

//for each polyfill
// console.log(Array.prototype); // check  before add polyfill added
// Array.prototype.myForEach = function (callback) {
//   console.log(Array.prototype);
//   console.log(this);
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i]);
//   }
// };

// function cb(name) {
//   console.log(name);
// }

// names.myForEach(cb);

//******Map */
const numbers = [1, 2, 3, 4];

// const squreNum = numbers.map(function (num) {
//   return num * num;
// });

// console.log(squreNum);

// console.log(Array.prototype);
// Array.prototype.myMap = function (callback) {
//   console.log(Array.prototype);
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i]));
//   }
//   return result;
// };

// function squreNum(num) {
//   return num * num;
// }

// let finalArr = numbers.myMap(squreNum);
// console.log(finalArr);

// const even = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const evenNum = even.filter(function (num) {
//   return num % 2 === 0;
// });
// console.log(evenNum);

// Array.prototype.myFilter = function (callback) {
//   let resultArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) {
//       resultArr.push(this[i]);
//     }
//   }
//   return resultArr;
// };

// function isEven(num) {
//   return num % 2 === 0;
// }

// let finalArr = even.myFilter(isEven);
// console.log(finalArr);

const arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce(function (acc, val) {
//   return acc + val;
// }, 0);

// console.log(sum);

Array.prototype.myReduce = function (callback, intialVal) {
  // let acc = intialVal;
  let acc;
  let firstIndex;
  if (arguments.length == 1) {
    acc = this[0];
    firstIndex = 1;
  } else {
    acc = intialVal;
    firstIndex = 0;
  }
  for (let i = firstIndex; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

function sum(acc, val) {
  return acc + val;
}

let finalArr = arr.myReduce(sum, 0);
console.log(finalArr);
