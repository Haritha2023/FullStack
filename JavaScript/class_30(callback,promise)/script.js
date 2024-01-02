console.log("Start");

function printName(name, cb) {
  //printname is synchronous it will excute their only it won't wait for setTimeout
  // thats why it will give undefined
  setTimeout(function () {
    cb(`My name is ${name}`);
  }, 1000);
  //by using setTimeout it will run at the end of the all sychronous code
}

let message = printName("Steve", function (resultName) {
  console.log(resultName);
}); //output : start end only
// console.log(message); //output : start undefined end

console.log("End");
