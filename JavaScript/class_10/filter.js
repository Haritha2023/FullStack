let numArr = [2, 4, 7, 8, 10, 11, 13, 14];

//find the even numbers

function evenNumbers() {
  let result = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 == 0) {
      result.push(numArr[i]);
    }
  }
  return result;
}

let evenNumbersRes = evenNumbers(numArr);
console.log(evenNumbersRes);

//using filter HOF

let oddNumbersRes = numArr.filter((num) => {
  return num % 2 != 0;
});

console.log(oddNumbersRes);

// find the positive numers in the array
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
