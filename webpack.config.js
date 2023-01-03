const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/app/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    static: path.join(__dirname, 'dist')
  }
}