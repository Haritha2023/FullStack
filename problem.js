const obj = {
  name: "Steve",
  myfun: function () {
    console.log("Hi from", this.name);
  },
};
obj.myfun();
let sayHiFun = obj.bind(myfun);
sayHiFun();
