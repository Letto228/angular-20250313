// eslint.config.js
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
    {
      files: ["**/*.ts"],
      ignores: ["**/*.config.js"],
      rules: {
        eqeqeq: "warn",
        "no-duplicate-imports": "warn",
        "no-unused-vars": "error",
        "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
      }
    },

]);
