//import the fs module

const fs = require("fs");

console.log("Before");

let data = fs.readFileSync("f1.txt");

console.log("data from f1.txt" + data);
console.log("After");
