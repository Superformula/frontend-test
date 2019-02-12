const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname,'src','index.js'),
  output: {
    path: path.join(__dirname,'build'),
    filename: 'index.bundle.js'
  },
  mode: 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname,'src'),
    historyApiFallback: true,
    proxy: {
      "/v3/graphql": {
        target: 'https://api.yelp.com/',
        changeOrigin: true,
      },
    }
  },
  module:       {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'src','index.html')
    }),
    new Dotenv()
  ]
};