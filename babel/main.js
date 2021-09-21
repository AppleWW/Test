// import '@babel/polyfill';

class Person {
  constructor(name) {
    this.name = name;
  }
  eat() {}
}

let fn = (num) => num + 2;
console.log(fn(2));

let promise = Promise.resolve('ok');
console.log(promise);
