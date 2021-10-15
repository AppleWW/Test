// class Storage {
//   static getInstance() {
//     if (!Storage.instance) {
//       Storage.instance = new Storage();
//     }
//     return Storage.instance;
//   }

//   getItem(key) {
//     return localStorage.getItem(key);
//   }
//   setItem(key, value) {
//     return localStorage.setItem(key, value);
//   }
// }

// const storage1 = Storage.getInstance();
// const storage2 = Storage.getInstance();

// console.log(storage1 === storage2);
// storage1.setItem('name', 'lili');
// storage1.getItem('name');
// storage2.getItem('name');

function StorageBase() {}
StorageBase.prototype.getItem = function (key) {
  return localStorage.getItem(key);
};
StorageBase.prototype.setItem = function (key, value) {
  return localStorage.setItem(key, value);
};

const Storage = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new StorageBase();
    }
    return instance;
  };
})();

const storage1 = Storage();
const storage2 = Storage();
console.log(storage1 === storage2);
storage1.setItem('name', 'haha');
storage1.getItem('name');
storage2.getItem('name');
