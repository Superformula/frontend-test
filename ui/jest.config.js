// jest.config.js
// Sync object
module.exports = {
    verbose: true,
    moduleNameMapper: {
        "^.+\\.(css|scss)$": "identity-obj-proxy",
        "^.+\\.svg$": "<rootDir>/src/tests/svgTransform.js"
      }
  };
  