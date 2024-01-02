// let person1 = "Haritha";
// let person2 = "Ravi";
// person1 = person2;
// console.log(person1);
// console.log(person2);

let person1 = {
  name: "Haritha",
  age: 35,
};

let person2 = {
  name: "Ravi",
  age: 40,
};

person2 = person1;
person2.age = 50;
console.log(person2);
console.log(person1);
