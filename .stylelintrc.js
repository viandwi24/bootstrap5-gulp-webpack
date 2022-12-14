module.exports = {
  extends: "stylelint-config-recommended-scss",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "comment-no-empty": null,
    "scss/no-global-function-names": null,
    "scss/function-quote-no-quoted-strings-inside": null,
    "no-invalid-position-at-import-rule": null,
  }
}