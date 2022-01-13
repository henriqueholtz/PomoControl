module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/views/components/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-preset-craco",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        cracoConfigFile: "../craco.config.js",
      },
    },
  ],
  "framework": "@storybook/react"
}