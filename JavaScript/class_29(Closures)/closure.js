function parent() {
  var a = 10;
  function child1() {
    var b = 20;
    function grandchild() {
      console.log(a);
      console.log(b);
    }
    return grandchild;
  }
  return child1;
}

let childReturnedFn = parent();

let grandChildReturnedFn = parent();
console.log(grandChildReturnedFn());
