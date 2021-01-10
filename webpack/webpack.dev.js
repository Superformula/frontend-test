// Imports
// -------

// Config
const common = require('./webpack.common');
// Libraries
const {merge} = require('webpack-merge');
// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Internal
// --------

const config = merge(common, {
    devtool: 'source-map',
    mode: 'development',
    optimization: {
        minimize: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
            template: "./src/index.html",
            favicon: "./src/favicon.ico",
            filename: "./index.html",
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        })
    ],
});


// Exports
// -------

// Default Export
module.exports = config;
