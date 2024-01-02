// call method

// it is used to invoke a method with owner object as argument.
//it is used to call a method which is outside the object
var obj = {
  name: "Haritha",
};

function sayHello(occupation, age) {
  return "Hello" + this.name + occupation + age;
}
// sayHello.call(obj);
// console.log(sayHello.call(obj));
let ans = sayHello.call(obj, "Software Engineer", 38);
console.log(ans);

//apply method

// it is used to invoke a method with owner object as argument and
//it will take arguments as an array

let ans2 = sayHello.apply(obj, ["Software Engineer", 38]);
console.log(ans2);

//bind method
//store the function binded with object
//it is used to store that function we can use it whenever we want

let ans3 = sayHello.bind(obj);
console.log("this is testing of method is in object", obj, ans3);
console.log(ans3("Software Engineer", 38));
console.log(ans3("Software Engineer", 38));
console.log(ans3("Software Engineer", 38));
console.log(ans3("Software Engineer", 38));
