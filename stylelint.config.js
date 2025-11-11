module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-scss"],
  rules: {
    "max-line-length": 80,
    "color-hex-length": "short",
    indentation: 2,
    "string-quotes": "single",
    "selector-class-pattern": null,
    "scss/at-import-partial-extension": null,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["ng-deep"],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
};
