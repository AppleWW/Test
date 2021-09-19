function throttle(fn, delay) {
  let preTime = Date.now();

  return function () {
    var self = this,
      args = arguments,
      nowTime = Date.now();

    if (nowTime - preTime >= delay) {
      preTime = Date.now();
      return fn.apply(self, args);
    }
  };
}

function debounce(fn, delay) {
  var timer = null;

  return function () {
    var self = this,
      args = arguments;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(self, args);
    }, delay);
  };
}
