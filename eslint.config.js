// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: 
    {
      "no-trailing-spaces": "error",  
      "eol-last": "error", 
      "eqeqeq": ["error", "always"],
      "@angular-eslint/component-class-suffix": ["error", { "suffixes": ["Component"] }], 
      "@angular-eslint/directive-class-suffix": ["error", { "suffixes": ["Directive"] }],

      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }], 
      "sort-imports": ["error", { "ignoreDeclarationSort": true }], 
      "prefer-const": "error",    

      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
  {
    extends: ["plugin:@typescript-eslint/recommended"],
    rules: {
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-explicit-any": "warn"
    }
  }, 

);
