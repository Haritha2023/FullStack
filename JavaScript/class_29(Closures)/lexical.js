function a() {
  // console.log(b)// output: 15
  var b = 15;
  function c() {
    var e = 18;
    function d() {
      console.log(b); // 15 closure of c which is having value
      console.log(e); // 18  closure of e which is having value
    }
    d();
  }
  c();
}
a();
// each function have lexical scope
// lexical scope: it will create chain with parent function
// the chaining of lexical environment of functions is known as scoping chainig
//c function have chain with a()
// a() have chain with global execution context
