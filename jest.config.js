module.exports = {
    "collectCoverageFrom": [
        "src/ts/**/*.tsx",
        "!src/ts/index.tsx"
    ],
    "transform": {
        "^.+\\.[jt]sx?$": "babel-jest"
    },
}
