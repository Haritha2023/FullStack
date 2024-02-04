// const numbers = [2, 5, 100, 4];

// numbers.forEach((num) => {
//   console.log(String(num));
//   console.log(num + " " + String(num).charCodeAt(0));
// });

// const sortedNumbers = numbers.sort();

// console.log(sortedNumbers);

const alphabet = ["b", "a", "P", "d"];

alphabet.forEach((alphabet) => {
  console.log(alphabet + " " + alphabet.charCodeAt(0));
});

// const sortedAlphabet = alphabet.sort();

// console.log(sortedAlphabet);

//comparator callback

const numbers = [2, 5, 100, 4];

numbers.forEach((num) => {
  console.log(num + " " + String(num).charCodeAt(0));
});

const sortedNumbers = numbers.sort((a, b) => {
  console.log("a-> ", a + "b-> ", b);
  // if (a < b) {
  //   return -1;
  // } else if (a > b) {
  //   return 1;
  // } else {
  //   return 0;
  // }
  return a - b;
});

console.log(sortedNumbers);
