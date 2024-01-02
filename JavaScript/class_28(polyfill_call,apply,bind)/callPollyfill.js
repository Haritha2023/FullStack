//polyfill of call
const car = {
  name: "xuv 300",
  color: " Aquamarine",
};
function buyCar(price) {
  console.log(`I bought a ${this.color} ${this.name} of ${price} `);
}
//this is related to call the function so use Function
// it will take context of obj as owner obj as argument in call method
Function.prototype.myCall = function (context = {}, ...args) {
  console.log(this); // this will refer to buyCar function
  if (typeof this !== "function") {
    throw new Error(this + " is not a function");
  }
  context.fn = this;
  context.fn(...args);
};
buyCar.myCall(car, 3000000);
