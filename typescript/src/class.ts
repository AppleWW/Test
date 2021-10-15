class Person {
  // 实例的属性
  name: string;
  age: number;
  sex: string = 'male';
  // 实例的方法
  sayHello() {
    console.log('hello');
  }

  // 构造函数
  constructor(name: string, age: number) {
    // this 当前实例
    this.name = name;
    this.age = age;
  }

  // 类的属性
  static age: number = 12;
  // 类的方法
  static sayHello() {
    console.log('hello');
  }
}

const p = new Person('111', 11);
console.log(p);
console.log(Person.age);

// 抽象类，不能用来创建对象，只能继承
// 可以添加抽象方法
abstract class Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // 抽象方法只能定义在抽象类里
  // 子类必须重写抽象方法
  abstract sayHello(): void;
}

class Dog extends Animal {
  sayHello() {
    console.log('wang');
  }
}
class Cat extends Animal {
  sayHello() {
    console.log('miao');
  }
}
const dog = new Dog('111', 5);
const cat = new Cat('222', 5);
console.log(dog, cat);
dog.sayHello();
cat.sayHello();
