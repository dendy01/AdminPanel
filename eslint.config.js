import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    ...pluginVue.configs["flat/strongly-recommended"],
    "plugin:vue/vue3-strongly-recommended",
    {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
    {
        rules: {
            "no-multiple-empty-lines": ["error", { "max": 1 }],
            "indent": ["error", 4],
            "space-infix-ops": "error",
            "semi": ["error", "always"],
            "vue/max-attributes-per-line": ["error", {
                "singleline": {
                  "max": 1
                },      
                "multiline": {
                  "max": 1
                }
            }]
        }
    }
];