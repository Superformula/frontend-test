module.exports = {
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/mock/styleMock.js",
  },
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
};
