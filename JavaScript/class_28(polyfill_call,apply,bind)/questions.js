// Q1

const person = { name: "Mark" };

function sayHi(age) {
  return `${this.name} is ${age} years`;
}

console.log(sayHi.call(person, 26)); // Mark is 26 years
let a = sayHi.bind(person, 26);
console.log(a());

// Q2

const age = 10;

var person1 = {
  name: "Mark",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 24 };
console.log(person1.getAge.call(person2)); /// 24

// Q3

let status = "hi";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // 🥑
  console.log(data.getStatus.call(this));
}, 0);

// Q4

const animals = [
  { species: "Lion", name: "King" },
  { species: "Tiger", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

// output = #0 Lion King
//          #1 Tiger Queen

// const numbers = [1, 2, 3, 4, 5];

// console.log(Math.max.apply(null, numbers))
// console.log(Math.min.apply(null , numbers))

// let max = -Infinity
// let min = Infinity

// for(let i=0 ; i<numbers.length ; i++){
//     if(numbers[i] > max){
//         max = numbers[i]
//     }
//     if(numbers[i] < min){
//         min = numbers[i]
//     }
// }

// console.log(max)
// console.log(min)
