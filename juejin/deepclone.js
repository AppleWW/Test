function deepClone(obj, hash = new WeekMap()) {
  // 非对象，就不用拷贝
  if (obj == null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // weekmap中有对象，直接返回
  if (hash.has(obj)) return hash.get(obj);

  // 数组或者对象
  let cloneObj = new obj.constructor();
  // 是对象就放在 weekmap中
  hash.set(obj, cloneObj);
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      cloneObj[i] = deepClone(obj[i], hash);
    }
  }

  return cloneObj;
}

// 循环引用 Set Map

let obj = { age: 18 };
let n = deepClone(obj);
console.log(typeof new Set());
