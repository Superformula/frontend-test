module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(ts|tsx)?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setup-tests.ts'],
  testMatch: ['<rootDir>/src/**/?(*.)spec.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^design-system/(.*)': '<rootDir>/src/design-system/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
};
