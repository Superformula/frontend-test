module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  env: {
    browser: true,
    node: true
  },
  settings: {
    'import/resolver': 'webpack'
  },
  rules: {
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/prefer-stateless-function': 1,
    camelcase: 0,
    'object-curly-newline': 0
  }
};
