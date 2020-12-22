const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: { output: { comments: false } },
        extractComments: false,
      }),
    ],
  },
});
