const path = require('path');
const webpack = require('webpack');

const APP_ABSOLUTE_PATH = path.join(__dirname, 'app');

const absolutePathTo = file => path.join(APP_ABSOLUTE_PATH, file);

module.exports = {
  entry: path.join(APP_ABSOLUTE_PATH, 'main.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.vue$/, loader: 'vue-loader'},
    ]
  }
}
