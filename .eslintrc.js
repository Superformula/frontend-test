module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier", "react", "@typescript-eslint"],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        moduleDirectory: ['node_modules', 'src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        printWidth: 120,
        tabWidth: 2
      }
    ],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/prefer-interface": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [1, { extensions: ['.ts', '.tsx'] }],
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'parent', ['index', 'internal', 'sibling']],
        'newlines-between': 'always',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['return', 'if', 'switch'] },
    ],
    'react/require-default-props': 0,
    'react/prop-types': 0,
  }
};
