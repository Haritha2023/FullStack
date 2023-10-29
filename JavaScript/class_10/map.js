//calculate numberarray squares
numArr = [2, 3, 4, 5, 6];
const resSquare = numArr.map((num) => {
  return num * num;
});

console.log(resSquare);
//I have bank transactions and you have change this from usd to inr
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrToUsd = 80;

const result = transactions.map((transaction) => {
  return transaction * inrToUsd;
});

console.log(result);
