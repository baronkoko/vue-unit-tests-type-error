module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transformIgnorePatterns: ["/node_modules/(?!fake-utils-lib)"],
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
};
