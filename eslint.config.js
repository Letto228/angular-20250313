// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettierConfig = require('eslint-config-prettier');
const google = require('eslint-config-google');

/** @type {import('typescript-eslint').Config} */
module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      google,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      {
        plugins: {
          prettier: require('eslint-plugin-prettier'),
        },
        rules: {
          'prettier/prettier': ['error', require('./.prettierrc.json')],
          ...prettierConfig.rules,
        },
      },
    ],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    processor: angular.processInlineTemplates,
    rules: {
      'new-cap': [
        'error',
        {
          capIsNewExceptions: [
            'Component',
            'Injectable',
            'Pipe',
            'NgModule',
            'Directive',
            'Input',
            'Output',
          ],
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'require-jsdoc': 'off',
      'valid-jsdoc': 'off',
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  }
);
