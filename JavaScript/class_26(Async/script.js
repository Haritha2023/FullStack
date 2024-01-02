//when we use async keyword infront of any function
//  IT WILL RETURN THE PROMISE

function greetings() {
  return "Hello";
}

let message = greetings();
console.log(message);

//Async keyword infront of any function IT WILL RETURN THE PROMISE

async function name() {
  return "hello world";
}

let message1 = name();
message1.then((res) => console.log(res));
console.log(message1);

async function greetings2() {
  // it won't return promise inside promise
  return new Promise((resolve, reject) => {
    let a = 2;
    let b = 2;

    if (a === b) {
      resolve("Promise Resolved");
    } else {
      reject("Promise Failed");
    }
  });
}

let message2 = greetings2();
console.log(message2); //output: it will return one promise

//new promise

let newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved successfully");
  }, 12000);
});

let newPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 resolved successfully");
  }, 8000);
});
// function excutePromise() {
//   newPromise.then((res) => console.log(res));
//   console.log("Scaler is Awesome");
// }

// excutePromise();

//output:------scaler is awesome!!
//Promise Resolved successfuly

async function executePromiseAsync() {
  console.log("Hello world from async"); //it won't wait for 12sec
  let val1 = await newPromise; // remaining all will excute after 12sec
  console.log(val1);

  let val2 = await newPromise2;
  console.log(val2);

  console.log("Scaler is awesome!! from async function");
}

// it will more priority to the promise first promise will print after that console
executePromiseAsync();
