module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    'shared/(.*)': '<rootDir>/src/shared/$1',
    '\\.(jpg|ico|jpeg|png|svg)$': '<rootDir>/test/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/test/fileMock.js',
  },
};
