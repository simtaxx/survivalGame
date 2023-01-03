const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/app/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: 'eval',
  devServer: {
    static: path.join(__dirname, 'dist')
  },
  "module": {
    "rules": [
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "@babel/preset-env",
            ]
          }
        }
      },
    ]
  }
}