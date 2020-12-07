module.exports = {
    collectCoverageFrom: [
        'src/**/*.[jt]s?(x)',
        '!src/graphql/*',
        '!src/**/*.d.ts',
        '!src/**/?(*.){stories,styled}.[jt]s?(x)',
    ],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json',
        },
    },
    moduleFileExtensions: [
        'web.js',
        'js',
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'json',
        'web.jsx',
        'jsx',
        'node',
    ],
    moduleNameMapper: {
        '^~/(.*)': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: [
        'jest-expect-message',
        'jest-mock-console/dist/setupTestFramework.js',
    ],
    testEnvironment: 'jest-environment-jsdom-fourteen',
    testURL: 'http://localhost',
    transform: {
        '^.+\\.[jt]sx?$': 'ts-jest',
        '^.+\\.svg$': 'jest-svg-transformer',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.[jt]sx?$'],
}
