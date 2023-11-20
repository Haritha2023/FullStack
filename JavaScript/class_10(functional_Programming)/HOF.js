radiusArr = [2, 3, 4, 5, 6];
function circleArea(radius) {
  //This is callback function
  return 3.14 * radius * radius;
}

function circleCircumference(radius) {
  return 2 * 3.14 * radius;
}

function circleDiameter(radius) {
  return 2 * radius;
}

function calculateArea(arr, cb) {
  //This is higher order function
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return result;
}

let Areas = calculateArea(radiusArr, circleArea);
let Circumference = calculateArea(radiusArr, circleCircumference);
let Diameter = calculateArea(radiusArr, circleDiameter);

console.log(Areas);
console.log(Circumference);
console.log(Diameter);
