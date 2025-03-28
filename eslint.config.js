// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettierConfig = require('eslint-config-prettier');
const esLintConfigGoogle = require('eslint-config-google');
const eslintConfigPrettier = require('eslint-config-prettier/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = tseslint.config(
    {
        files: ['**/*.ts'],
        extends: [
            eslint.configs.recommended,
            esLintConfigGoogle,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
            prettierConfig,
        ],
        processor: angular.processInlineTemplates,
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
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
    },
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
);
