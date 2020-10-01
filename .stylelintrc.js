module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-prettier"
  ],
  "plugins": [
    "stylelint-prettier",
    "stylelint-scss"
  ],
  "rules": {
    "prettier/prettier": true,
    "max-nesting-depth": 3
  },
  "ignoreFiles": [
    "./node_modules/**/*.{css,scss,sass}",
    "./dist/**/*.{css,scss,sass}"
  ]
}
