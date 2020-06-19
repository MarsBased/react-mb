module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "plugin:react/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/no-multi-comp": "error",
        "react/forbid-prop-types": "error",
        "react/prefer-es6-class": "error",
        "react/prefer-stateless-function": "error",
        "react/jsx-filename-extension": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-closing-tag-location": "error",
        "react/jsx-tag-spacing": "error",
        "react/jsx-curly-spacing": "error",
        "react/jsx-boolean-value": "error",
        "react/no-array-index-key": "error",
        "react/no-string-refs": "error",
        "react/jsx-wrap-multilines": "error",
        "react/self-closing-comp": "error",
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-no-bind": "error",
        "react/require-render-return": "error",
        "react/sort-comp": "error",
        "react/no-is-mounted": "error",
    },
};
