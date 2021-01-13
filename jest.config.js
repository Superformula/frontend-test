module.exports = {
    "collectCoverageFrom": [
        "src/ts/**/*.tsx",
        "!src/ts/index.tsx"
    ],
    "transform": {
        "^.+\\.[jt]sx?$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
    },
}
