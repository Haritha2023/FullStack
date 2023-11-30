// simple console log
//console.log(this);

// This keyword inside the function
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
      console.log(this);
    }
    g();
  },
};

obj2.testFunction();
