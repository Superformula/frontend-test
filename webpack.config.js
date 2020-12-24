const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, './.env'),
});
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash:8].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
    }),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      consts: path.resolve(__dirname, './src/consts'),
      utils: path.resolve(__dirname, './src/utils'),
      hooks: path.resolve(__dirname, './src/hooks'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: { chunks: 'all' },
  },
};
