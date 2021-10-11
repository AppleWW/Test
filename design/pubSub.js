// let list = [];

// function listen(fn) {
//   list.push(fn);
// }
// function trigger(data) {
//   list.map((item) => item(data));
// }

// listen(function () {
//   console.log('111');
// });
// listen(function () {
//   console.log('222');
// });

// trigger();

let map = {};
function listen(key, fn) {
  if (!map[key]) {
    map[key] = [];
  }
  map[key].push(fn);
}
function trigger(key, data) {
  map[key].map((item) => item(data));
}
listen('a', function () {
  console.log('111');
});
listen('b', function () {
  console.log('222');
});

trigger('a');
trigger('a');
trigger('b');
