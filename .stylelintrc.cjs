module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-scss"],
  rules: {
    // 'color-hex-length': 'long',
    "selector-class-pattern": [
      "^[a-z][a-z0-9]*(-[a-z0-9]+)*$",
      {
        message: "Expected class selector to be kebab-case",
      },
    ],
    "scss/at-import-partial-extension": null,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["ng-deep"],
      },
    ],
    // Angular специфичные правила
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["host", "host-context"],
      },
    ],
    // Разрешаем Angular селекторы
    "selector-type-no-unknown": [
      true,
      {
        ignoreTypes: [
          // Angular компоненты
          "/^app-/",
          // Angular директивы
          "/^\\[.*\\]$/",
        ],
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
