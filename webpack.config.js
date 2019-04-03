const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    // this turns on a lot of optimizations, the 'start' script in package.json sets this to development
    mode: 'production',
    // import alias resolution settings
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Components: path.resolve(__dirname, './src/components/'),
            Css: path.resolve(__dirname, './src/css/'),
            Base: path.resolve(__dirname, './src/'),
        },
    },
    // output for build
    output: {
        filename: 'main.js',
        path: __dirname + '/dist',
    },
    // loaders
    module: {
        rules: [
            {test: /\.s?(ass|css)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.html$/, use: [{loader: 'html-loader'}]},
        ],
    },
    // dev server configuration
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },
    plugins: [
        // automatically generate index.html with the right tags added in
        new HtmlWebpackPlugin({template: 'src/index.html'}),
    ],
};
