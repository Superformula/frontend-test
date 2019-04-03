const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'main.js',
        path: __dirname + '/dist',
    },
    module: {
        rules: [
            {test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]},
            {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.html$/, use: [{loader: "html-loader"}]},
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'src/index.html'})
    ],
};