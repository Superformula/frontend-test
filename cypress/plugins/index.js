module.exports = (on, config) => {
  require('@cypress/react/plugins/next')(on, config);
  return config;
};
