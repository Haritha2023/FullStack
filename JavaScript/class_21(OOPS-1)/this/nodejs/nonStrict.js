// This is always pointing to some object

// Point to the empty object when tried to use in global space
console.log(this); // {}

// This inside the function
function test() {
  console.log(this); // global object
}

test();

// This keyword inside a object

let obj = {
  name: "ekta",
  age: "23",
  getPrintInfo: function () {
    console.log(this);
  },
};

obj.getPrintInfo();
// {}, global, obj

// This keyword from a function that is inside a function inside an object

let obj2 = {
  name: "mrityunjay",
  age: "23",
  testFunction: function () {
    console.log(this);
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
