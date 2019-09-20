const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {test: /\.(js)$/, loader: 'babel-loader'},
      {test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader' ]},
    ]
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ]
}