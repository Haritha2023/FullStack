//PROBLEMS GOT IN CONTEST
// function outer() {
//   let x = 5;
//   return function inner(y) {
//     x += y;
//     return x;
//   };
// }

// let closureFn = outer();
// console.log(closureFn(3));
// console.log(closureFn(2));

// function outer() {
//   let x = 10;
//   function inner() {
//     console.log(x);
//   }
//   x = 20;
//   return inner;
// }

// let closureFn = outer();
// closureFn();

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
// }

// async function foo() {
//   console.log("start foo");
//   await delay(1000);
//   console.log("Middle");
//   await delay(2000);
//   console.log("end foo");
// }

// foo();
// console.log("after foo");

// const number = 5;
// function mul(x) {
//   number = x * 2;
// }

// mul(10);
// console.log(number);

// const contacts = [
//   { firstName: "Tom", lastName: "Jackson", number: "0123456" },
//   { firstName: "Linda", lastName: "Garner", number: "11111111" },
//   { firstName: "Adam", lastName: "Cooper", number: "2222222" },
// ];

// function lookUpProfile(name, prop) {
//   const filteredContacts = contacts.filter((contact) => {
//     return name === contact.firstName;
//   });

//   if (filteredContacts.length > 0) {
//     if (filteredContacts[0][prop] !== undefined) {
//       console.log(filteredContacts[0][prop]);
//     } else {
//       console.log("No such property");
//     }
//   } else {
//     console.log("No such contact");
//   }
// }

// // Example usage
// lookUpProfile("Tom", "number");

function printName(name) {
  console.log(name);
}

function printFirstName(firstName, cb) {
  console.log("First Name: " + firstName);
  cb("Haritha");
}

printFirstName("Sadanala", printName);
