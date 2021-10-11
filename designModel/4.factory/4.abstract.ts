export {};
abstract class AmericanoCoffee {}
abstract class LatteCoffee {}
abstract class CappuccinoCoffee {}

class StarBucksAmericanoCoffee extends AmericanoCoffee {}
class LuckinAmericanoCoffee extends AmericanoCoffee {}
class StarBucksLatteCoffee extends LatteCoffee {}
class LuckinLatteCoffee extends LatteCoffee {}
class StarBucksCappuccinoCoffee extends CappuccinoCoffee {}
class LuckinCappuccinoCoffee extends CappuccinoCoffee {}
//抽象工厂，抽象工厂里需要三个方法
abstract class CafeFactory {
  abstract createAmericanoCoffee(): AmericanoCoffee;
  abstract createLatteCoffee(): LatteCoffee;
  abstract createCappuccinoCoffee(): CappuccinoCoffee;
}
class StarBucksCafeFactory extends CafeFactory {
  createAmericanoCoffee() {
    return new StarBucksAmericanoCoffee();
  }
  createLatteCoffee() {
    return new StarBucksLatteCoffee();
  }
  createCappuccinoCoffee() {
    return new StarBucksCappuccinoCoffee();
  }
}
class LuckinCafeFactory extends CafeFactory {
  createAmericanoCoffee() {
    return new LuckinAmericanoCoffee();
  }
  createLatteCoffee() {
    return new LuckinLatteCoffee();
  }
  createCappuccinoCoffee() {
    return new LuckinCappuccinoCoffee();
  }
}

let luckinCafeFactory = new LuckinCafeFactory();
console.log(luckinCafeFactory.createAmericanoCoffee()); //创建瑞幸的美式咖啡

let starBucksCafeFactory = new StarBucksCafeFactory();
console.log(starBucksCafeFactory.createCappuccinoCoffee()); //创建瑞幸的美式咖啡
