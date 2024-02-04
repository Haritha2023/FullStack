// function Action1(name, cb) {
//   setTimeout(() => {
//     cb(`My name is ${name}`);
//   }, 1000);
// }

// function Action2(age, cb) {
//   setTimeout(() => {
//     cb(`My age is ${age}`);
//   }, 2000);
// }

// function Action3(occupation, cb) {
//   setTimeout(() => {
//     cb(`My occupation is ${occupation}`);
//   }, 3000);
// }

// It is called as callback hell and pyramid of doom
// Action1("Haritha", function (name) {
//   console.log(name);
//   Action2(35, function (age) {
//     console.log(age);
//     Action3("Software Developer", function (occupation) {
//       console.log(occupation);
//     });
//   });
// });

//with multiple call back it will give pyramid structure

//promisified functions
// function Action1(name, cb) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       cb(`My name is ${name}`);
//     }, 1000);
//   });
// }

// function Action2(age, cb) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       cb(`My age is ${age}`);
//     }, 2000);
//   });
// }

// function Action3(occupation, cb) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       cb(`My occupation is ${occupation}`);
//     }, 3000);
//   });
// }

// //THIS IS NOT CORRECT WAY OF CALLING THE FUNCTION
// //THIS IS PROMISE HELL

// // Action1("Haritha").then((name) => {
// //   console.log(name);
// //   Action2(35).then((age) => {
// //     console.log(age);
// //     Action3("Software Developer").then((occupation) => {
// //       console.log(occupation);
// //     });
// //   });
// // });

// //PROMISE CHAINING
// Action1("Haritha")
//   .then((name) => {
//     console.log(name);
//     return Action2(35);
//   })
//   .then((age) => {
//     console.log(age);
//     return Action3("Software Developer");
//   })
//   .then((occupation) => {
//     console.log(occupation);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// call backhell practice
function Action1(name, cb) {
  setTimeout(() => {
    cb(`My name is ${name}`);
  }, 1000);
}

function Action2(age, cb) {
  setTimeout(() => {
    cb(`My age is ${age}`);
  }, 2000);
}

function Action3(occupation, cb) {
  setTimeout(() => {
    cb(`My occupation is ${occupation}`);
  }, 3000);
}

Action1("Haritha", function (name) {
  console.log(name);
  Action2(35, function (age) {
    console.log(age);
    Action3("software developer", function (occupation) {
      console.log(occupation);
    });
  });
});
