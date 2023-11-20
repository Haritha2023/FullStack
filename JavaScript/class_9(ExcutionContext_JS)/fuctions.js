//add two numbers
function addTwoNumbers(a, b) {
  let sum = a + b;
  console.log(sum);
}

//how to call or invoke functions

addTwoNumbers(12, 11);
addTwoNumbers("Haritha", "Scaler");

//fuctions as first class citizens
function sayHi() {
  console.log("Hi"); // this is the normal way of functions
}
sayHi();

//functions as expressions and first class citizens
let sayFc = function () {
  console.log("Hi from function expression");
};
sayFc();

//create a multiply 2number functions using first class citizens
let multiply = function (a, b) {
  console.log(a * b);
};
multiply(17, 8);

//Arrow functions

let subs = (a, b) => {
  console.log(a - b);
};
subs(26, 13);
