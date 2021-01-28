const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    const cwd = process.cwd();
    // It looks like storybook uses emotion theming for its own implementation
    // and that's related to how the emotion theming for app side of the components,
    // needs this extra trick to work, I found it in this long standing issue
    // https://github.com/storybookjs/storybook/issues/10231
    config.resolve.alias = {
      ...config.resolve.alias,
      "@emotion/core": path.join(cwd, "node_modules", "@emotion", "react"),
      "@emotion/styled": path.join(cwd, "node_modules", "@emotion", "styled"),
      "@emotion/styled-base": path.join(
        cwd,
        "node_modules",
        "@emotion",
        "styled"
      ),
      "emotion-theming": path.join(cwd, "node_modules", "@emotion", "react"),
    };
    return config;
  },
};
