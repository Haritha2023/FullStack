"use strict";

// this point to empty object
// console.log(this);

// this inside the function

// function test() {
//   console.log(this);
// }

// test();

// This keyword from a function inside a object

// let obj = {
//   name: "Tirupati",
//   age: "23",
//   getFullInfo: function () {
//     console.log(this);
//   },
// };

// obj.getFullInfo();

// This keyword from a function that is inside a function inside an object

let obj2 = {
  name: "mrityunjay",
  age: "23",
  testFunction: function () {
    function g() {
      const a = 2;
      const b = 3;
      const sum = a + b;
      console.log(sum);
      console.log(this);
    }
    g();
  },
};

obj2.testFunction();

//In strict mode
console.log(this); //{}
//this inside a function
function test() {
  console.log(this); //undefined
}
test();

const obj1 = {
  name: "Haritha",
  age: 35,
  getName: function () {
    console.log(this.name);
    console.log(this); //object
  },
  getAge: function () {
    function getYear() {
      console.log(this, "This is console of obj-function-function"); // undefined
    }
    getYear();
  },
};
obj1.getName();
obj1.getAge();
