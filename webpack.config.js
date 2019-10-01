const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevelopment = process.env.NODE_ENV === "development";

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
          { loader: "postcss-loader"},
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      { test: /\.css$/, use: [
        "style-loader", "css-loader", "postcss-loader"
      ]},
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
  ]
};
