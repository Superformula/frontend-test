const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const OUTPUT_PATH = 'dist';
module.exports = () => {
	const isDevelopment = process.env.NODE_ENV === 'development';
	return {
		entry: './src/index.js',
		mode: isDevelopment ? 'development' : 'production',
		output: {
			path: path.resolve(__dirname, OUTPUT_PATH),
			filename: '[name].[chunkhash].js',
		},

		module: {
			rules: [
				// All files ending .js and .jsx (except those in `node_modules`) that are required by webpack
				// will pass through `babel-loader`.
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env', '@babel/preset-react']
							}
						},
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
								plugins: function () {
									return [require('autoprefixer')]
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
								plugins: function () {
									return [require('autoprefixer')]
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
				// {
				// 	test: /\.s[ac]ss$/i,
				// 	use: [
				// 		{
				// 			loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
				// 		}, {
				// 			loader: 'css-loader'
				// 		}, {
				// 			loader: 'postcss-loader',
				// 			options: {
				// 				plugins: function () {
				// 					return [require('autoprefixer')]
				// 				}
				// 			}
				// 		}, {
				// 			loader: 'sass-loader',
				// 			options: {
				// 				sourceMap: isDevelopment
				// 			}
				// 		},
				// 	]
				// }
			]
		},

		resolve: {
			extensions: ['.js', '.jsx', '.scss'],
		},

		// webpack-dev-server config
		devServer: {
			contentBase: path.join(__dirname, OUTPUT_PATH),
			compress: true,
			port: 3000,
			historyApiFallback: true
		},

		devtool: isDevelopment ? 'source-map' : false,

		plugins: [
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: isDevelopment ? '[name].css' : '[name].[hash].css',
				chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
			}),
			new HtmlWebpackPlugin({ template: './src/index.html' }),
		]
	}
};
