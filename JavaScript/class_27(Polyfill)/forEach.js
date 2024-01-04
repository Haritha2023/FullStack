//Write our own forEach method
const names = ["Haritha", "Ravi", "Isha", "Goutham"];
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    console.log(this);
    callback(this[i]);

    // printName('Mark) -> 1st loop
    // printName('Steve') -> 2nd loop
    // printName('John') - 3rd Loop
  }
};

function printName(name) {
  console.log(name);
}

names.myForEach(printName);

console.log(Array.prototype);

// We need an array takes a callback fn and loops through the array
// gets the element one by one
