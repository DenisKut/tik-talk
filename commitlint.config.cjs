/**
 * Conventional commit message format:
 *
 * <type>[optional scope]: <short description>
 *
 * [optional body]
 *
 * [optional footer(s)]
 *
 * Пример:
 *   feat(auth): добавлен компонент логина
 *
 *   Добавлена форма логина с валидацией.
 *
 *   BREAKING CHANGE: изменён формат токена авторизации
 *
 * Типы коммитов:
 *   feat     — новая функциональность
 *   fix      — исправление бага
 *   docs     — только документация
 *   style    — форматирование, не влияющее на логику
 *   refactor — рефакторинг без исправления багов/фич
 *   perf     — улучшение производительности
 *   test     — добавление/обновление тестов
 *   chore    — обновление сборки, зависимостей, инфраструктуры
 *   revert   — откат изменений
 *   build    — изменения в сборке/CI
 *   ci       — изменения в CI/CD
 *
 * Требования:
 * - Заголовок ≤ 50 символов, с маленькой буквы, без точки в конце
 * - Тело и футер ≤ 72 символа в строке
 * - Обязательный тип из списка выше
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 72],
    "body-max-line-length": [2, "always", 80],
    "footer-max-line-length": [2, "always", 80],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-full-stop": [2, "never", "."],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
        "build",
        "ci",
      ],
    ],
  },
};
