import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,vue}'] 
    },
    {
        languageOptions: {
            globals: globals.browser 
        } 
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    ...pluginVue.configs['flat/strongly-recommended'],
    {
        files: ['**/*.vue'], languageOptions: {
            parserOptions: {
                parser: tseslint.parser 
            } 
        } 
    },
    {
        ignores: ['docs/*']
    },
    {
        rules: {
            'vue/block-tag-newline': ['error', {
                'singleline': 'always',
                'multiline': 'always'
            }
            ],
            'vue/component-api-style': ['error', 
                ['script-setup', 'composition']
            ],
            'vue/html-comment-content-spacing': ['error', 'always'],
            'vue/max-attributes-per-line': ['error', {
                'singleline': 1, 'multiline': 1 
            }],
            'indent': ['error', 4],
            'no-tabs': 'off',
            'semi': ['error', 'always'],
            'no-console': 'warn',
            'quotes': ['error', 'single'],
            'curly': 'error',
            'space-in-parens': ['error', 'never'],
            'comma-dangle': ['error', 'never'],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'object-curly-newline': ['error', {
                'ImportDeclaration': 'never',
                'ExportDeclaration': 'never',
                'ObjectExpression': {
                    'multiline': true, 'minProperties': 1 
                },
                'ObjectPattern': {
                    'multiline': true, 'minProperties': 1 
                }
            }],
            'vue/html-indent': [
                'error',
                4,
                {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: []
                }
            ]
        }
    }
];