const list = [];
const map = {};
function listen(key, fn) {
  if (!map[key]) {
    map[key] = [];
  }
  map[key].push(fn);
}

function trigger(key, data) {
  map[key].forEach((item) => {
    item(data);
  });
}

listen('event1', function () {
  console.log('listen1');
});
listen('event1', function () {
  console.log('listen3');
});
listen('event2', function () {
  console.log('listen2');
});

trigger('event1');
trigger('event1');
trigger('event2');
