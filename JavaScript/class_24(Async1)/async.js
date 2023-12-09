let hello3 = "hello world3";
let hello4 = "hello world4";
let hello5 = "hello world5";

console.log(hello3);
setTimeout(() => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(hello5);
}, 1000);

console.log(hello4);
