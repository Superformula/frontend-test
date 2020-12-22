const Path = require('path');

const AppSourceDir = Path.join(__dirname, '..', 'src');

module.exports = ({ config }) => {
  // Disable the Storybook internal-`.svg`-rule for components loaded from our app.
  const svgRule = config.module.rules.find(rule => 'test.svg'.match(rule.test));
  svgRule.exclude = [AppSourceDir];

  config.module.rules.push({
    test: /\.svg$/i,
    include: [AppSourceDir],
    use: ['@svgr/webpack', 'url-loader'],
  });

  return config;
};
