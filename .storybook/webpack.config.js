const path = require('path');

const AppSourceDir = path.join(__dirname, '..', 'src');

module.exports = ({ config }) => {
  // Disable the Storybook internal-`.svg`-rule for components loaded from our app.
  const svgRule = config.module.rules.find(rule => 'test.svg'.match(rule.test));
  svgRule.exclude = [AppSourceDir];

  config.module.rules.push({
    test: /\.svg$/i,
    include: [AppSourceDir],
    use: ['@svgr/webpack', 'url-loader'],
  });

  config.resolve = {
    alias: {
      assets: path.resolve(__dirname, '../src/assets'),
      components: path.resolve(__dirname, '../src/components'),
      consts: path.resolve(__dirname, '../src/consts'),
      utils: path.resolve(__dirname, '../src/utils'),
      hooks: path.resolve(__dirname, '../src/hooks'),
    },
  };

  return config;
};
