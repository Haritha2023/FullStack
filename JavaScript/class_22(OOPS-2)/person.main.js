class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  // Getter for the first name
  get firstName() {
    return this._firstName;
  }

  // Setter for the first name
  set firstName(newFirstName) {
    if (typeof newFirstName === "string") {
      this._firstName = newFirstName;
    } else {
      console.error("Invalid input. First name must be a string.");
    }
  }

  // Getter for the last name
  get lastName() {
    return this._lastName;
  }

  // Setter for the last name
  set lastName(newLastName) {
    if (typeof newLastName === "string") {
      this._lastName = newLastName;
    } else {
      console.error("Invalid input. Last name must be a string.");
    }
  }

  // Getter for the age
  get age() {
    return this._age;
  }

  // Setter for the age
  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
      console.error("Invalid input. Age must be a positive number.");
    }
  }

  // Method to display information about the person
  displayInfo() {
    console.log(
      `${this._firstName} ${this._lastName} is ${this._age} years old.`
    );
  }
}

// Example usage:
const john = new Person("John", "Doe", 30);

// Using getter methods
console.log(john.firstName); // John
console.log(john.lastName); // Doe
console.log(john.age); // 30

// Using setter methods
john.firstName = "Jane";
john.lastName = "Smith";
john.age = 25;

// Displaying updated information
john.displayInfo(); // Jane Smith is 25 years old.
