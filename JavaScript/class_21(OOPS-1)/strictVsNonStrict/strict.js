"use strict";

let a = 10;
console.log(a);

// obj = {score: 10, readonly: 109}
const obj = {};
Object.defineProperty(obj, "readonly", { writable: false });
obj.score = 99;
obj.readonly = 109;
console.log(obj);
