// function Car(name, color, topSpeed) {
//   this.name = name;
//   this.color = color;
//   this.topSpeed = topSpeed;
//   //   this.drive = () => {
//   //     console.log("drive");
//   //   };
// }

// let car1 = new Car("alto", "red", "130kmph");
// let car2 = new Car("safari", "black", "170kmph");
//car is a constructor
//new can create a memory of object

// blueprint of real entity
// blueprint of object
// contains attributes/properties and behaviors/method
// A class is a set of objects which shares
// common characteristics/ behavior and common properties
// collection of objects of similar types

// ES2015 -> class

class Car {
  // initialize a new instances of Car
  constructor(name, color, topSpeed) {
    this.name = name;
    this.color = color;
    this.topSpeed = topSpeed;
  }
}

// new keyword is used to create memory for object ->
let car1 = new Car("alto", "red", "130kmph");
let car2 = new Car("safari", "black", "170kmph");

console.log(car1);
console.log(car2);
