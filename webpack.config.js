const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevelopment = process.env.NODE_ENV === "development";
const dotenv = require('dotenv').config().parsed;

// reduces to an object
const envKeys = Object.keys(dotenv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(dotenv[next]);
  return prev;
}, {});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js"
  },
  module: {
    rules: [
      { test: /\.(svg|png)$/, loader: "url-loader" },
      { test: /\.(js)$/, loader: "babel-loader" },
      {
        test: /\.(scss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { importLoaders: 3 }},
          { loader: "resolve-url-loader" },
          { 
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  mode: "none",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css"
    }),
    new webpack.DefinePlugin(envKeys)
  ]
};
