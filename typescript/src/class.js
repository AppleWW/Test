"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // 构造函数
    function Person(name, age) {
        this.sex = 'male';
        // this 当前实例
        this.name = name;
        this.age = age;
    }
    // 实例的方法
    Person.prototype.sayHello = function () {
        console.log('hello');
    };
    // 类的方法
    Person.sayHello = function () {
        console.log('hello');
    };
    // 类的属性
    Person.age = 12;
    return Person;
}());
var p = new Person('111', 11);
console.log(p);
console.log(Person.age);
// 抽象类，不能用来创建对象，只能继承
// 可以添加抽象方法
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.sayHello = function () {
        console.log('wang');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sayHello = function () {
        console.log('miao');
    };
    return Cat;
}(Animal));
var dog = new Dog('111', 5);
var cat = new Cat('222', 5);
console.log(dog, cat);
dog.sayHello();
cat.sayHello();
