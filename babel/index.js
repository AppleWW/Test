var babelCore = require('@babel/core');

var code = 'var fn = (num) => num + 2;';
var option = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'chrome 42'
      }
    ]
  ]
};

var result = babelCore.transform(code, option);

console.log(result);
console.log('----------------------');
console.log(result.code);
