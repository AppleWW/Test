// import b from './b';

class Dog {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}
console.log('this is a.js');
const btn = document.querySelector('#btn');
btn.onclick = () => {
  // b();
  import(/* webpackChunkName: "b" */ './b.js');
};
if (module.hot) {
  // 开启热替换
  module.hot.accept();
}
