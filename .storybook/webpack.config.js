const path = require('path');
const _ = require('lodash');

module.exports = async ({config}) => {
    _.extend(config.resolve.alias, {
        Constants: path.resolve(__dirname, '../src/constants/'),
        Components: path.resolve(__dirname, '../src/components/'),
        Css: path.resolve(__dirname, '../src/css/'),
        Services: path.resolve(__dirname, '../src/services/'),
        Store: path.resolve(__dirname, '../src/store/'),
        Utils: path.resolve(__dirname, '../src/utils/'),
    });

    // add the loaders
    config.module.rules.push({test: /\.s?(ass|css)$/, use: ['style-loader', 'css-loader', 'sass-loader']});
    config.module.rules.push({test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/});
    config.module.rules.push({test: /\.html$/, use: [{loader: 'html-loader'}]});

    // Return the altered config
    return config;
};
