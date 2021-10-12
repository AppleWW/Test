class Publisher {
  constructor() {
    this.observers = [];
    console.log('created');
  }
  add(observer) {
    console.log('add');
    this.observers.push(observer);
  }
  remove(observer) {
    console.log('remove');
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.observers.splice(i, 1);
      }
    });
    // this.observers = this.observers.filter((item) => {
    //   return item !== observer;
    // });
  }
  notify() {
    console.log('notify');
    this.observers.forEach((item) => {
      item.update(this);
    });
  }
}

class Observer {
  constructor() {
    console.log('observer created');
  }
  update() {
    console.log('observer update invoked');
  }
}
