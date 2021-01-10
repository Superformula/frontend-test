// Imports
// -------

// Config
const common = require('./webpack.common');
// Libraries
const {merge} = require('webpack-merge');
// Plugins
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

// Internal
// --------

const config = merge(common, {
    devServer: {
        compress: true,
    },
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true
                    },
                    output: {
                        comments: false
                    }
                },
                extractComments: false
            }),
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new CompressionPlugin(),
        new HtmlWebpackPlugin({
            title: "Production",
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
