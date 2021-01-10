module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'amd': true,
        'jest': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'plugins': [
        'react'
    ],
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};
