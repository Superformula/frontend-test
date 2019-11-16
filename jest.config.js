module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/test/stylesMock.js"
  },
};