module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "docs": ["../src/**/*.mdx",],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-designs",
    "@storybook/addon-a11y",
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  },
  "resolve": {
    "extensions": [".ts", ".mdx", ".md"]
  },
  "features": {
    "interactionsDebugger": true,
  },
}