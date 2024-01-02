//Promise Combinators

function Action1(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`My name is ${name}`);
    }, 1000);
  });
}

function Action2(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`My age is ${age}`);
    }, 2000);
  });
}

function Action3(occupation) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`My occupation is ${occupation}`);
    }, 3000);
  });
}

//promise.all
//this will take array of promises as an Input will resolve all promises
//even if one promise is gets rejected error will be thrown and no promises will be fulfilled
Promise.all([Action1("Haritha"), Action2(35), Action3("Software Developer")])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise.allSettled

//this will take array of promises as an Input will resolve or reject whatever
// it will give entire Data(status) at the end
Promise.allSettled([
  Action1("Haritha"),
  Action2(35),
  Action3("Software Developer"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
//promise.race

//this will take array of promises as an Input and will resolve or reject whatever
//promise is executed first and it will ignore all the other promises

Promise.race([Action1("Haritha"), Action2(35), Action3("Software Developer")])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//Promise.any

//this work same as promise.race

Promise.any([Action1("Haritha"), Action2(35), Action3("Software Developer")])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//THE ONLY DIFF OF RACE AND ANY

//Race will give output of first executed promise whether it is resolve or reject
//Any will give output of first executed RESOLVED PROMISE, if first executed promise
// is rejectd it will go to next promise
