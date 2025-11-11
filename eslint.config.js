import angular from "@angular-eslint/eslint-plugin";
import angularTemplate from "@angular-eslint/eslint-plugin-template";
import angularParser from "@angular-eslint/template-parser";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  additionalAngularRules,
  additionalTemplateRules,
} from "./eslint-angular-rules.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      ".angular/**",
      "coverage/**",
      "**/*.min.js",
      "**/*.spec.ts",
    ],
  },
  // TypeScript файлы
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.app.json"],
        tsconfigRootDir: __dirname,
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "@angular-eslint": angular,
      "simple-import-sort": eslintPluginSimpleImportSort,
    },
    rules: {
      // TypeScript правила
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: false,
          },
        },
        {
          selector: "class",
          format: ["PascalCase"],
        },
        {
          selector: "enum",
          format: ["PascalCase"],
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
        },
        {
          selector: "function",
          format: ["camelCase"],
        },
      ],

      // Angular специфичные правила
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/no-empty-lifecycle-method": "error",
      "@angular-eslint/use-lifecycle-interface": "error",
      "@angular-eslint/use-pipe-transform-interface": "error",

      // Дополнительные Angular правила
      ...additionalAngularRules,

      // Импорты - настроим правильный порядок для Angular (оптимизированно)
      "simple-import-sort/imports": [
        "error", // Изменено с 'warn' на 'error' для автофикса
        {
          groups: [
            // Angular импорты первыми
            ["^@angular"],
            // Сторонние библиотеки
            ["^[^.]"],
            // Относительные импорты из родительских директорий
            ["^\\.\\."],
            // Относительные импорты из текущей директории
            ["^\\./"],
          ],
        },
      ],
      "simple-import-sort/exports": "warn",

      // Общие правила
      "no-console": "warn",
      "no-tabs": "off",
    },
  },
  // HTML шаблоны Angular
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: angularParser,
    },
    plugins: {
      "@angular-eslint/template": angularTemplate,
    },
    rules: {
      "@angular-eslint/template/banana-in-box": "error",
      "@angular-eslint/template/no-negated-async": "error",
      "@angular-eslint/template/conditional-complexity": [
        "error",
        { maxComplexity: 4 },
      ],
      "@angular-eslint/template/cyclomatic-complexity": [
        "error",
        { maxComplexity: 10 },
      ],
      // '@angular-eslint/template/no-call-expression': 'warn',

      // Дополнительные правила для шаблонов
      ...additionalTemplateRules,
    },
  },
];
