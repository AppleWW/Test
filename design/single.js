// function Single(name) {
//   this.name = name;
//   this.instance = null;
// }

// Single.prototype.getName = function () {
//   console.log(this.name);
// };

// Single.getInstance = function (name) {
//   if (!this.instance) {
//     this.instance = new Single(name);
//   }
//   return this.instance;
// };

// let a = Single.getInstance('a');
// let b = Single.getInstance('b');
// console.log(a, b, a === b);

var Single = (function () {
  var __single = null;

  return function (Fun) {
    if (!__single) {
      __single = new Fun();
    }
    return __single;
  };
})();

let Fn = function () {
  this.age = {};
};

let a = new Single(Fn);
let b = new Single(Fn);
console.log(a, b, a === b);
