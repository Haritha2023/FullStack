// polyfill of Reduce

// callback , acc , initialValue

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator;
  let firstIndex;

  if (arguments.length === 1) {
    // all values we passed to function will come to arguments arr
    accumulator = this[0];
    firstIndex = 1;
  } else {
    accumulator = initialValue;
    firstIndex = 0;
  }

  for (let i = firstIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i]);
  }

  return accumulator;
};

let arr2 = [1, 2, 3, 4];

function calculateSum(accumulator, currentValue) {
  return accumulator + currentValue;

  // 0+1 = 1 ,
  // 1+2 = 3
  // 3+3 = 6
  // 6+4 = 10
}

let sum = arr2.myReduce(calculateSum);

console.log(sum);

//if we don't pass  initial val 0, it will take first val of array as initial value
// 1st ele as acc, loop
