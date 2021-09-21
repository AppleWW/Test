module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        helper: true,
        corejs: false,
        regenerator: true
      }
    ]
  ],
  presets: [
    [
      '@babel/preset-env'
      // {
      //   targets: {
      //     chrome: '38'
      //   },
      //   useBuiltIns: 'usage' // 和 polyfill 的行为有关
      // }
    ]
  ],
  env: {
    development: {},
    production: {}
  }
};
