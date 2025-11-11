// Angular-специфичные правила ESLint
// Этот файл содержит дополнительные правила, которые можно включить по мере необходимости

export const additionalAngularRules = {
  // Правила для производительности
  "@angular-eslint/prefer-on-push-component-change-detection": "warn",

  // Правила для лучших практик
  "@angular-eslint/no-input-rename": "error",
  "@angular-eslint/no-output-rename": "error",
  "@angular-eslint/no-output-on-prefix": "error",
  "@angular-eslint/no-output-native": "error",

  // Правила для метаданных (если поддерживаются в вашей версии)
  // '@angular-eslint/no-inputs-metadata-property': 'error',
  // '@angular-eslint/no-outputs-metadata-property': 'error',
  // '@angular-eslint/no-host-metadata-property': 'error',
};

export const additionalTemplateRules = {
  // Дополнительные правила для шаблонов
  "@angular-eslint/template/use-track-by-function": "warn",
  "@angular-eslint/template/no-any": "error",
};
