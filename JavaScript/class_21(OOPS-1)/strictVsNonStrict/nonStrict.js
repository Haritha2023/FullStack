a = 10;
console.log(a);

const obj = {};
Object.defineProperty(obj, "readonly", { writable: false });
obj.score = 99;
obj.readonly = 109;
console.log(obj);
