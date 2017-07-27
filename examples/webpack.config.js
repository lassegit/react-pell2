var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    // bundle: path.resolve(__dirname, '../src/index.js'),
    index: path.resolve(__dirname, './index.js'),
  },
  output: {
        path: __dirname,
        filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query:
        {
          presets:['es2015', 'react']
        }
      }
    ]
  },
  watch: true,
  plugins: []
};
