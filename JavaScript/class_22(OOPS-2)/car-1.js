// Constructor Function for Car
function Car(name, color) {
  this.name = name;
  this.color = color;
}

// Adding a shared prototype method
Car.prototype.drive = function () {
  console.log(`${this.name} is driving.`);
};

Car.prototype.hasOwnProperty = function () {
  console.log("Applying Brake");
};

// Car.__proto__ to print prototype object
// but if i want to assign new functions to the prototype
// i should do object.prototype.methodName = function

function TataCars(brand) {
  this.brand = brand;
}

TataCars.prototype = Car;

// TataCars -> Car -> Object -> null -> error
const tataCars = new TataCars("tata");
console.log(tataCars);

const car = new Car("tiago", "red");
console.log(car);
console.log(car.hasOwnProperty());
