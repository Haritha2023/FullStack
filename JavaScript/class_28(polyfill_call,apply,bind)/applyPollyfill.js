//polyfill of call
const car = {
  name: "xuv 300",
  color: " Aquamarine",
};
function buyCar(price) {
  console.log(`I bought a ${this.color} ${this.name} of ${price} `);
}
Function.prototype.myCall = function (context = {}, args = []) {
  console.log(this); // this will refer to buyCar function
  if (typeof this !== "function") {
    throw new Error(this + " is not a function");
  }

  if (!Array.isArray(args)) {
    throw new Error(this + "We neede an array for args");
  }
  context.fn = this;
  context.fn(...args);
};
buyCar.myCall(car, [3000000]);
