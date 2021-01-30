module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["url-loader"],
    });

    return config;
  },
};
