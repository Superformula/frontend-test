// Imports
// -------

// Libraries
const path = require('path');
const webpack = require('webpack');
// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Internal
// --------

const config = {
    devServer: {
        index: 'index.html',
        contentBase: path.join(__dirname, './dist'),
        hot: true
    },
    entry: {
        app: './src/ts/index.tsx'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
            chunkFilename: 'css/styles.css'
        }),
        new webpack.ProgressPlugin(),

    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: '/node_modules/',
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ttf)$/,
                exclude: '/node_modules/',
                use: [
                    'file-loader'
                ]
            },
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: {
                                removeAll: true
                            }
                        }
                    ]
                }
            })
        ]
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js',
            '.jsx',
            '.json'
        ]
    }
};

// Exports
// -------

// Default Export
module.exports = config;
