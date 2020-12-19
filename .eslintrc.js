module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-array-index-key': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false, peerDependencies: false }],
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
