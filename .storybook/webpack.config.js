// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

module.exports = {
  plugins: [],
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['eslint-loader']
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "react-svg-loader",
              options: {
                jsx: true // true outputs JSX tags
              }
            }
          ]
        }
    ],
  },
};
