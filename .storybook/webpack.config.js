const path = require('path');
const _ = require('lodash');

module.exports = async ({config}) => {
    _.extend(config.resolve.alias, {
        Components: path.resolve(__dirname, '../src/components/'),
        Css: path.resolve(__dirname, '../src/css/'),
        Base: path.resolve(__dirname, '../src/'),
    });

    // add the loaders
    config.module.rules.push({test: /\.s?(ass|css)$/, use: ['style-loader', 'css-loader', 'sass-loader']});
    config.module.rules.push({test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/});
    config.module.rules.push({test: /\.html$/, use: [{loader: 'html-loader'}]});

    // Return the altered config
    return config;
};
