// HOF-> function that accepts and returns a function
// map, filter, reduce
//call, apply and bind
// to change the context of this keyword
function getEmail() {
  //this is pointing to  window
  console.log(this);
  console.log(`${this.firstName}.${this.lastName}@gmail.com`);
}

function getFullInfo(schoolName, city, modeOfTravel) {
  console.log(this);
  console.log(
    schoolName +
      "school , " +
      city +
      ", " +
      modeOfTravel +
      " " +
      "Mode of travel"
  );
}
const student = {
  firstName: "Haritha",
  lastName: "Yanamadala",
  age: 35,
  //this is pointing to student object
  getEmail: function () {
    console.log(`${this.firstName}.${this.lastName}@gmail.com`);
  },
};

const teacher = {
  firstName: "Ravi",
  lastName: "Krishna",
  age: 39,
};

console.log(getEmail(student));
// undefined.undefined@gmail.com-output
// undefined

// call
//Question - getEmail function with object

getEmail.call(student);
student.getEmail.call(teacher);

// getFullInfo("GopalanNational", "Bengalore", "Schoolbus");

const arr = ["GopalanNational", "Bengalore", "Schoolbus"];
getFullInfo.call(student, ...arr);
getFullInfo.apply(teacher, arr);
