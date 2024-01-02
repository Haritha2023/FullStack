// add 3 numbers

// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(1, 2, 3);

//currying - whenever you create a function pass one argument to it a time
//create a multiple function but each function will take one argument

// Qn: 1
// function fn1(a) {
//   return function fn2(b) {
//     return function fn3(c) {
//       return a + b + c;
//     };
//   };
// }

// let sum = fn1(3)(4)(5);
//console.log(sum);

// Qn: 2
//calculate ('sum')(3)(4)-> 7
//calculate ('substract')(5)(2)-> 3
//calculate ('sum')(3)(4)-> 7
//calculate ('sum')(3)(4)-> 7

function calculate(operation) {
  return function (a) {
    return function (b) {
      // return console.log(operation, a, b);
      if (operation == "sum") return a + b;
      else if (operation == "substract") return a - b;
      else if (operation == "multiply") return a * b;
      else if (operation == "divide") return a / b;
      else return "Invalid operation";
    };
  };
}
console.log(calculate("sum")(3)(4));
console.log(calculate("substract")(7)(3));
console.log(calculate("multiply")(3)(4));
console.log(calculate("divide")(12)(6));

//Qn: 03 Infinite Currying
//write an add function which can add values like this
//add(2)(3)(4)(5)(6)(7)(8)........();

function add1(a) {
  return function add2(b) {
    if (b) return add1(a + b);
    return a;
  };
}
console.log(add1(5)(3)(6)(2));
