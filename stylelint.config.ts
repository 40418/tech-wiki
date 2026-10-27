import type { Config } from "stylelint";

export default {
    extends: [
        "stylelint-config-standard-scss"
    ],
    ignoreFiles: [
        "**/dist/**",
        "**/node_module/**"
    ],
    plugins: [
        "@stylistic/stylelint-plugin"
    ],
    rules: {
        // style
        "@stylistic/indentation": 4,
        "max-nesting-depth": 3,
        // pattern
        "selector-class-pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$",
        "custom-property-pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$",
        "scss/dollar-variable-pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$",
        "scss/at-mixin-pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$"
    }
} satisfies Config;