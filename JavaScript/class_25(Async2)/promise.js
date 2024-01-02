//https://javascript.info/promise-basics

// promises are 4stages
// pending
// resolve
// reject
// settled

//syntax of promisep

let myPromise = new Promise(function (resolve, reject) {
  const a = 5;
  const b = 5;

  if (a == b) {
    resolve("Yes they are equal");
  } else {
    reject("No they are not equal");
  }
});

//then and catch
// it will work when the promise is resolved
myPromise.then(function (result) {
  console.log(result);
});
//it will work when the promise is rejected
myPromise.catch(function (error) {
  console.log(error);
});
