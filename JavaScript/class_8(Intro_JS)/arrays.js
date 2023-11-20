let arr = [1, "Scaler", true, 4, undefined, null, [1, 2, 3]];

// console.log(arr)

// how to access array Elements

// console.log(arr[4])
// // reassign an array element
// arr[2] = 'Mrinal'

// console.log(arr)

// Array Methods

//push method

// push method will add an element at the end of an array

let cars = ["Urus", "Bentley", "BMW"];

// cars.push('Audi')

// console.log(cars)

// pop method

// let removedElement1 = cars.pop() // Audi

// let removedElement2 = cars.pop() // BMW

// console.log(removedElement1)
// console.log(removedElement2)

// console.log(cars)

//Shift and Unshift

// unshift

// Will add an element at the start of your array

cars.unshift("ferrari");

console.log(cars);

// Will remove an element at the start of your array
cars.shift();
cars.shift();

console.log(cars);

//Creting array using array literals
let arr1 = [];
arr1.push(1, 2, 3, "Hari", "Ravi", "XUV300");
console.log(arr1);

//Creating array using new keyword
let arr2 = new Array(10, 20, 30, 40, 50, 60);
console.log("Array 1:", arr2);

let arr3 = new Array("HTML", "CSS", "JavaScript", "React");
console.log(arr3);
//convert an array to a string
console.log(arr3.toString());
console.log(arr3);
console.log(arr3.length);
//increasing the length of the array
arr3.length = 7;
console.log(arr3);
//decreasing the length of the array
arr3.length = 3;
console.log(arr3);
//access elements of the array
console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);
console.log(arr3[3]);
//update the array after intializating
console.log("Before updation", arr3);
arr3[3] = "Python";
arr3[4] = "Angular";
console.log("After intialization array updation", arr3);
//print elements of the array using loop iteration
console.log(arr3);
for (var i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

// Array length:property returns the length (size) of an array
// Array toString():converts an array to a string of (comma separated) array values
// Array pop():removes the last element from an array
// Array push():adds a new element to an array (at the end)
// Array shift():removes the first array element and "shifts" all other elements to a lower index
// Array unshift():adds a new element to an array (at the beginning), and "unshifts" older elements:
// Array join():also joins all array elements into a string
// Array delete()
// Array concat():creates a new array by merging (concatenating) existing arrays
// Array flat():creates a new array with sub-array elements concatenated to a specified depth
// Array splice():method adds new items to an array.
// Array slice(): method slices out a piece of an array.
