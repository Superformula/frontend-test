const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const OUTPUT_PATH = 'dist';
module.exports = () => {
    const isDevelopment = process.env.NODE_ENV === 'development';
    return {
        entry: ['whatwg-fetch', './src/index.js'],
        mode: isDevelopment ? 'development' : 'production',
        output: {
            path: path.resolve(__dirname, OUTPUT_PATH),
            filename: '[name].[chunkhash].js',
            publicPath: '/'
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react']
                            }
                        }
                    ]
                },
                {
                    test: /\.module\.s(a|c)ss$/,
                    loader: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: isDevelopment
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function() {
                                    return [require('autoprefixer')];
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment
                            }
                        }
                    ]
                },
                {
                    test: /\.s(a|c)ss$/,
                    exclude: /\.module.(s(a|c)ss)$/,
                    loader: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function() {
                                    return [require('autoprefixer')];
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment
                            }
                        }
                    ]
                }
            ]
        },

        resolve: {
            extensions: ['.js', '.jsx', '.scss']
        },

        devServer: {
            contentBase: path.join(__dirname, OUTPUT_PATH),
            compress: true,
            port: 3000,
            historyApiFallback: true,
            proxy: {
                '/v3/**': {
                    target: 'https://api.yelp.com',
                    changeOrigin: true
                }
            }
        },

        devtool: isDevelopment ? 'source-map' : false,

        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: isDevelopment ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
            }),
            new HtmlWebpackPlugin({ template: './src/index.html' })
        ]
    };
};
