function printName(name) {
  console.log(name);
}

printName("Haritha");

//callback function-- is a function that can be passed to another function as an argument

function printFirstName(firstName, cb, cb1) {
  console.log(firstName);
  cb("Krishna");
  cb1(37);
}

function printLastName(lastName) {
  console.log(lastName);
}

function printAge(age) {
  console.log(age);
}
printFirstName("Ravi", printLastName, printAge);
