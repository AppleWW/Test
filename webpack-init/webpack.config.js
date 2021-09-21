const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // use: ['babel-loader'],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  corejs: 3
                }
              ]
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true
      }
      // hash: true
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    moduleIds: 'named'
  },
  devServer: {
    port: '3001',
    compress: true,
    hot: true
  }
};
