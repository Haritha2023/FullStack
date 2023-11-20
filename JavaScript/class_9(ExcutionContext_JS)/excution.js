var a = 2;
var b = 3;
function addition(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

let ans = addition(a, b);
console.log(ans);

// -> Global excution context: It is responsible for excute all js code
//     It has 2 phases
// 1. memory allocation:memory is allocated, alot the value undefined for variables
// for functions the whole body of function is saved
// 2. code excution:variable get their values
// when function is called a new excution context is created
//     again we have two phases memory and code excution phases
// it will excute the function and return the value
// function excution context is done
