const path = require('path');
const _ = require('lodash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {BaseHrefWebpackPlugin} = require('base-href-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = ({production: isProduction = false, base = '/'} = {}) => {
    if (isProduction && base) console.log(`Setting base to: ${base}`);
    return {
        devtool: isProduction ? false : 'source-map',
        entry: ['whatwg-fetch', './src/index.js'],
        // this turns on a lot of optimizations, the 'start' script in package.json sets this to development
        mode: 'production',
        // import alias resolution settings
        resolve: {
            extensions: ['.js', '.jsx', '.scss'],
            alias: {
                Constants: path.resolve(__dirname, './src/constants/'),
                Components: path.resolve(__dirname, './src/components/'),
                Css: path.resolve(__dirname, './src/css/'),
                Services: path.resolve(__dirname, './src/services/'),
                Store: path.resolve(__dirname, './src/store/'),
                Utils: path.resolve(__dirname, './src/utils/'),
            },
        },
        // output for build
        output: {
            filename: 'main.js',
            path: __dirname + '/public',
            publicPath: '/',
        },
        // loaders
        module: {
            rules: [
                {test: /\.s?(ass|css)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
                {test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/},
                {test: /\.html$/, use: [{loader: 'html-loader'}]},
            ],
        },
        // dev server configuration
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            disableHostCheck: true,
            historyApiFallback: true,
            host: '0.0.0.0',
            hot: true,
            https: true,
            port: 3000,
            proxy: {
                '/v3': {
                    target: 'https://api.yelp.com',
                    changeOrigin: true,
                },
                '/json': {
                    target: 'http://ip-api.com',
                    changeOrigin: true,
                },
            },
        },
        optimization: {
            minimizer: [new TerserJSPlugin({})],
        },
        plugins: [
            isProduction ? new CompressionPlugin({
                filename: '[path].br[query]',
                algorithm: 'brotliCompress',
                test: /\.(jsx?|s?css|html|svg)$/,
                compressionOptions: {level: 11},
                threshold: 10240,
                minRatio: 0.8,
                deleteOriginalAssets: true,
            }) : () => {
            },
            // Beat that CSS down into something manageable, and pull it out of the bundle...
            // new MiniCssExtractPlugin({filename: '[name].css', chunkFilename: '[id].css'}),
            // automatically generate index.html with the right tags added in
            new HtmlWebpackPlugin({'template': 'src/index.html'}),
            new BaseHrefWebpackPlugin({baseHref: base}),
        ],
    };
};

