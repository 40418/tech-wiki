import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

// GitHub suil0304/suil0304 README.md를 바탕으로 AI로 뽑아낸 린팅 스타일 규칙입니다.
export default defineConfig([
    globalIgnores([
        "dist",
        "node_modules",
        "./*.config.ts"
    ]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite
        ],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        plugins: {
            "@stylistic": stylistic
        },
        rules: {
            // Indentation and statement punctuation
            "@stylistic/indent": ["error", 4, { SwitchCase: 1 }],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/comma-dangle": ["error", "never"],
            "@stylistic/eol-last": ["error", "always"],
            "@stylistic/no-trailing-spaces": "error",

            // Object / dictionary literal formatting
            "@stylistic/object-curly-spacing": ["error", "always"],
            "@stylistic/array-bracket-spacing": ["error", "never"],
            "@stylistic/comma-spacing": "error",
            "@stylistic/key-spacing": [
                "error",
                {
                    beforeColon: false,
                    afterColon: true
                }
            ],

            // Use `if()` rather than `if ()`
            "@stylistic/keyword-spacing": [
                "error",
                {
                    before: true,
                    after: true,
                    overrides: {
                        if: { after: false },
                        for: { after: false },
                        while: { after: false },
                        switch: { after: false },
                        catch: { after: false }
                    }
                }
            ],

            // K&R / 1TBS brace style
            "@stylistic/space-before-blocks": ["error", "always"],
            "@stylistic/brace-style": ["error", "1tbs"],

            // Prefer simple ternaries and early returns
            "@stylistic/multiline-ternary": ["error", "never"],
            "no-nested-ternary": "error",
            "no-else-return": "error",

            // TypeScript conventions
            "@typescript-eslint/no-inferrable-types": "error",
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "typeLike",
                    format: ["PascalCase"]
                },
                {
                    selector: "function",
                    format: [
                        "camelCase",
                        "PascalCase" // React Components
                    ],
                    leadingUnderscore: "allow"
                },
                {
                    // Global constants only
                    selector: "variable",
                    modifiers: ["const", "global"],
                    format: ["UPPER_CASE"],
                    leadingUnderscore: "allow"
                },
                {
                    selector: "variable",
                    types: ["function"],
                    format: [
                        "camelCase",
                        "PascalCase" // React Components
                    ],
                    leadingUnderscore: "allow"
                },
                {
                    // Protected members use a single `_` prefix.
                    selector: "memberLike",
                    modifiers: ["protected"],
                    format: ["camelCase"],
                    leadingUnderscore: "require"
                },
                {
                    // Private members use a double `__` prefix.
                    selector: "memberLike",
                    modifiers: ["private"],
                    format: ["camelCase"],
                    leadingUnderscore: "requireDouble"
                },
                {
                    // Allow quoted kebab-case object/type properties
                    selector: ["objectLiteralProperty", "typeProperty"],
                    modifiers: ["requiresQuotes"],
                    format: null,
                    custom: {
                        regex: "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$",
                        match: true
                    }
                },
                {
                    selector: [
                        "objectLiteralProperty",
                        "typeProperty",
                        "property"
                    ],
                    format: ["camelCase"],
                    leadingUnderscore: "allow"
                },
                {
                    selector: "variableLike",
                    format: ["camelCase"],
                    leadingUnderscore: "allow"
                },
                {
                    selector: "default",
                    format: null,
                    leadingUnderscore: "allow",
                    trailingUnderscore: "allow"
                }
            ]
        }
    }
]);
