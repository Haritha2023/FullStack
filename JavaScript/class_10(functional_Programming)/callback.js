function printName(name) {
  console.log(name);
}

printName("Haritha");

//callback function-- is a function that can be passed to another function as an argument

function printFirstName(firstName, cb, cb1) {
  console.log(firstName);
  cb("Krishna");
  cb1(37);
}

function printLastName(lastName) {
  console.log(lastName);
}

function printAge(age) {
  console.log(age);
}
printFirstName("Ravi", printLastName, printAge);

// We will simply create a different function for calculating area, circumference and
//  diameter and in every function we will simply iterate over an array, and then store
//  the calculated value in the result array, and return that array.

let rArr = [2, 3, 4, 5, 8];

function calculateArea(rArr) {
  let area = [];
  for (let i = 0; i < rArr.length; i++) {
    area.push(3.14 * rArr[i] * rArr[i]);
  }
  console.log("Area:", area);
}

calculateArea(rArr);

function calCircumference(rArr) {
  let circumference = [];
  for (let i = 0; i < rArr.length; i++) {
    circumference.push(2 * 3.14 * rArr[i]);
  }
  console.log("Circumference: ", circumference);
}

calCircumference(rArr);
