const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevelopment = process.env.NODE_ENV === "development";
const { parsed: localEnv } = require("dotenv").config();

// reduces to an object
const envKeys = Object.keys(localEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(localEnv[next]);
  return prev;
}, {});

module.exports = {
  entry: {
    index: ["./src/index.js"],
    vendor: [
      "@apollo/react-hooks",
      "apollo-boost",
      "graphql",
      "react",
      "react-dom",
      "react-router-dom",
    ],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.[hash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(svg|png)$/, loader: "url-loader" },
      { 
        test: /\.(js)$/, 
        exclude: "/node_modules/",
        loader: "babel-loader" },
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
                path: "postcss.config.js"
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
  devServer: {
    historyApiFallback: true,
  },
  mode: "none",
  stats: "minimal",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css"
    }),
    new webpack.DefinePlugin(envKeys),
  ],
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
